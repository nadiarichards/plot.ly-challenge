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
  var data = [{
        // type: "pie",
        // rotation: 90, 
        // text: ["Very Low", "Low", "Average", "Good", "Excellent", ""],
        domain: { x: [0, 1], y: [0, 1] },
        marker: {size: 28, color: '850000'},
        value: freq,   
        title: { text: "<b>Belly Button Washing Frequency</b><br><sub>Scrubs per Week</sub>"}, 
        type: "indicator",
        mode: "gauge+number",
        // delta: { reference: 400 },
        gauge: { axis: { range: [null, 9]},
        // bar: { color: "#669999" },
        // bgcolor: "white",
        borderwidth: 2,
        bordercolor: "transparent",
        steps: [
          { range: [0, 1], color: "#f7f2ec" },
          { range: [1, 2], color: "#f3f0e5" },
          { range: [2, 3], color: "#e9e7c9" },
          { range: [3, 4], color: "#e5e9b1" },
          { range: [4, 5], color: "#d5e595" },
          { range: [5, 6], color: "#b7cd8b" },
          { range: [6, 7], color: "#87c080" },
          { range: [7, 8], color: "#85bc8b" },
          { range: [8, 9], color: "#80b586" }
            ],
    //  } }
        }
    }];

    // var data = [trace];

    var layout = { 
      width: 500, 
      height: 400,
      margin: { t: 0, b: 0 }
    //   xaxis: {type:'category',zeroline:false, showticklabels:false,
    //     showgrid: false, range: [-1, 1]},
    //   yaxis: {type:'category',zeroline:false, showticklabels:false,
    //     showgrid: false, range: [-1, 1]}
    };
    Plotly.newPlot('gauge', data, layout);
};

init();