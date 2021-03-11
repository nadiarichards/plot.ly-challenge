var dropdownMenu = d3.select("#selDataset");
var id_input = dropdownMenu.node().value;
var barChart = d3.selectAll("#bar").node();

buildChart (barChart, data);

function buildChart(id_input) {

    d3.json('../samples.json').then((data) => {
        data.samples.forEach (function(val) {
            var id = val.id,
            var sample_values = val.map(sample_value => val.sample_values),
            var otu_ids = val.map(otu_id => val.otu_ids),
            var otu_labels = val.map(otu_label => val.otu_labels);
            console.log(id, sample_values, otu_ids, otu_labels);
    });

        var trace = {
            x: sample_values,
            y: otu_ids,
            orientation: 'h',
            type: 'bar'
        };
        var data = [trace];
        var layout = {title: "Belly Button Biodiversity"};
    
    Plotly.newPlot("#bar", data, layout);

};

d3.selectAll("#selDataset").on("change", bulidChart);