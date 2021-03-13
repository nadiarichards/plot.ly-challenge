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
        var layout1= {title: "Top 10 OTU" , yaxis: {tickmode: "linear"}, margin: {l:100, r:100, t:100, b:30}
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
    console.log("FRQ",freq);
  var data = [
      {
        domain: { x: [0, 1], y: [0, 1] },
        value: freq,   
        title: { text: "Belly Button Washing Frequency" },
        type: "indicator",
        mode: "gauge+number",
        delta: { reference: 400 },
        gauge: { axis: { range: [null, 9] } }
      }
    ];
    var layout = { width: 600, height: 400 };
    Plotly.newPlot('gauge', data, layout);
};

init();
