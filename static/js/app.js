function buildChart(id) {

    d3.json("samples.json").then((data) => {
        var ids = data.samples[0].otu_ids;
        var sampleValues = data.samples[0].sample_values.slice(0,10).reverse();
        var labels = data.samples[0].otu_labels.slice(0,10);
        var OTU_top = (data.samples[0].otu_ids.slice(0,10)).reverse();
        var OTU_id = OTU_top.map(d => "OTU" + d);
        var labels = data.samples[0].otu_labels.slice(0,10);

        var trace1 = {
            x: sampleValues,
            y: OTU_id,
            text: labels,
            marker: {
                color: 'blue'
            },
            orientation: 'h',
            type: 'bar'
        };

        var data1 = [trace1];
        var layout1= {yaxis: {tickmode: "linear"}, margin: {l:100, r:100, t:30, b:30}
        };
    
    Plotly.newPlot("bar", data1, layout1);

        var trace2 = {
            x: data.samples[0].otu_ids,
            y: data.samples[0].sample_values,
            mode: 'markers',
            marker: {
            color: data.samples[0].otu_ids,
            size: data.samples[0].sample_values,
            },
            text: data.samples[0].otu_labels
        };
        
        var layout2 = {
            xaxis: {title: "OTU ID"},
            height: 600,
            width: 1000
        };

        var data2 = [trace2];
        
    Plotly.newPlot("bubble", data2, layout2);
    });
}

function getDemoInfo(id) {
    d3.json("samples.json").then((sampledata)=> {
    var metadata = sampledata.metadata;
    var result = metadata.filter(meta => meta.id.toString() === id)[0];
    var demographicInfo = d3.select("#sample-metadata");
    demographicInfo.html("");
        Object.entries(result).forEach((key) => {
            demographicInfo.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");
        });
        showGauge(result.wfreq);
    });
}

function optionChanged(id) { 
    buildChart(id);
    getDemoInfo(id);
}

function init() { 
    var dropdown = d3.select("#selDataset");
    d3.json("samples.json").then ((sampledata) => {
        sampledata.names.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
        });
        buildChart(sampledata.names[0]);
        getDemoInfo(sampledata.names[0]);
    });
}

function showGauge(freq) {
    var level = freq/9*180;
    var degrees = 180 - level, radius = .5;
    var radians = degrees * Math.PI / 180;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);
    var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
     pathX = String(x),
     space = ' ',
     pathY = String(y),
     pathEnd = ' Z';
    var path = mainPath.concat(pathX,space,pathY,pathEnd);

    var data = [{ type: 'scatter',
    x: [0], y:[0],
     marker: {size: 28, color:'850000'},
     showlegend: false,
     name: 'WFREQ',
     text: level,
     hoverinfo: 'name'
   },
   { values: [50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9,50/9,50/9,50],
   rotation: 90,
   text: ['8-9','7-8','6-7','5-6','4-5','3-4','2-3','1-2','0-1'],
   textinfo: 'text',
   textposition:'inside',
   marker: {colors:['rgba(10, 20, 0, .5)','rgba(44, 157, 10, .5)', 'rgba(110, 184, 42, .5)',
                          'rgba(170, 202, 42, .5)', 'rgba(202, 209, 95, .5)',
                          'rgba(210, 206, 145, .5)', 'rgba(232, 226, 202, .5)',
                          'rgba(242, 226, 202, .5)','rgba(252, 236, 202, .5)',
                          'rgba(255, 255, 255, 0)']},
   labels: ['8-9','7-8','6-7','5-6','4-5','3-4','2-3','1-2','0-1'],
   hoverinfo: 'label',
   hole: .5,
   type: 'pie',
   showlegend: false
 }];
 
 var layout = {
   shapes:[{
       type: 'path',
       path: path,
       fillcolor: '850000',
       line: {
         color: '850000'
       }
     }],
   title: 'Belly Button Washing Frequency<br>Scrubs per Week',
   height: 500,
   width: 500,
   xaxis: {zeroline:false, showticklabels:false,
              showgrid: false, range: [-1, 1]},
   yaxis: {zeroline:false, showticklabels:false,
              showgrid: false, range: [-1, 1]}
 };
    Plotly.newPlot('gauge', data, layout);
};

init();