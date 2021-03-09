d3.json('samples.json').then(function(data) {
    var sample_values =
    var otu_ids = 
    var otu_labels = 

})



jsObject = JSON.parse(jsonObject); 

d3.json("samples.json").then((bioData) => {
    window.bioData = bioData;
    console.log(bioData);
});

// 1.Grab data from json file, name it
// 2.Iterate through the data, pulling out relevant sample_values, otu_ids and otu-Labels
// 3.Create a function to build a bar chart
// 4.Create a function to handle dropdown
// 5.Call BuildChart function first or add it to Init function to plot first person's data

var data = bioData;

sample_values=data.samples[0].sample_values;
otu_ids=data.samples[0].otu_ids;

Plotly.d3.json("samples.json").then(function(err, data) {
    // assuming json is formatted as { "data": [/* */], "layout": {/* */} }
  
    Plotly.plot('#bar', data.samples.sample_values, data.samples.otu_ids);
  });

$(jQuery.parseJSON(JSON.stringify(dataArray))).each(function() {  
    var ID = this.id;
    var CLASS = this.class;
});

json.forEach(function(obj) { console.log(obj.id); });



function buildChart() {
    d3.selectAll("div#bar").html("");
    var trace = {
        x: sample_values,
        y: otu_ids,
        orientation: 'h',
        type: 'bar'
    };

    var data = [trace];

    var layout = {title: "Belly Button Biodiversity"};
    
    Plotly.newPlot("#bar", data, layout);
// };

d3.selectAll("body").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
// Use D3 to select the dropdown menu
var dropdownMenu = d3.select("#selDataset");
// Assign the value of the dropdown menu option to a variable
var dataset = dropdownMenu.node().value;

var CHART = d3.selectAll("#bar").node();

// Initialize x and y arrays
var x = [];
var y = [];

switch(dataset) {
    case "dataset1":
    x = [1, 2, 3, 4, 5];
    y = [1, 2, 4, 8, 16];
    break;

    case "dataset2":
    x = [10, 20, 30, 40, 50];
    y = [1, 10, 100, 1000, 10000];
    break;

    case "dataset3":
    x = [100, 200, 300, 400, 500];
    y = [10, 100, 50, 10, 0];
    break;

    default:
    x = [1, 2, 3, 4, 5];
    y = [1, 2, 3, 4, 5];
    break;
}


// Note the extra brackets around 'x' and 'y'
Plotly.restyle(CHART, "x", [x]);
Plotly.restyle(CHART, "y", [y]);
}


// d3.select('select').on('change', updatePlotly);

// function updatePlotly () {
//     console.log('here');
// }

// function init() {
// var CHART = d3.selectAll("#bar").node();
// Plotly.newPlot(CHART, data);
// }

// // Call updatePlotly() when a change takes place to the DOM
// d3.selectAll("body").on("change", updatePlotly);

// // This function is called when a dropdown menu item is selected
// function updatePlotly() {
// // Use D3 to select the dropdown menu
// var dropdownMenu = d3.select("#selDataset");
// // Assign the value of the dropdown menu option to a variable
// var dataset = dropdownMenu.node().value;

// var CHART = d3.selectAll("#plot").node();

// // Initialize x and y arrays
// var x = [];
// var y = [];

// switch(dataset) {
//     case "dataset1":
//     x = [1, 2, 3, 4, 5];
//     y = [1, 2, 4, 8, 16];
//     break;

//     case "dataset2":
//     x = [10, 20, 30, 40, 50];
//     y = [1, 10, 100, 1000, 10000];
//     break;

//     case "dataset3":
//     x = [100, 200, 300, 400, 500];
//     y = [10, 100, 50, 10, 0];
//     break;

//     default:
//     x = [1, 2, 3, 4, 5];
//     y = [1, 2, 3, 4, 5];
//     break;
// }


// // Note the extra brackets around 'x' and 'y'
// Plotly.restyle(CHART, "x", [x]);
// Plotly.restyle(CHART, "y", [y]);
// }

// init();



// // function readTextFile(file, callback) {
// //     var rawFile = new XMLHttpRequest();
// //     rawFile.overrideMimeType("application/json");
// //     rawFile.open("GET", file, true);
// //     rawFile.onreadystatechange = function() {
// //         if (rawFile.readyState === 4 && rawFile.status == "200") {
// //             callback(rawFile.responseText);
// //         }
// //     }
// //     rawFile.send(null);
// // }
// // readTextFile("samples.json", function(text){
// //     var data = JSON.parse(text);
// //     console.log(data);
// // });



// d3.json(samples.json).then(function(data) {
//     console.log(data);
// });

// var d1 = [1, 2, 3, 4, 5];
// var d2 = [11, 12, 13, 14, 15];
// var categories = ['Apples', 'Oranges', 'Pears', 'Grapefruits', 'Lemons']
// function makePlot(dataset) {
//     var trace = {
//         x: categories,
//         y: dataset,
//         type: 'bar'
//     };
//     var d = [trace];
//     Plotly.newPlot('plot', d);
// }
// d3.select('#menu').on('change',
//     function() {
//         var selectedOption = d3.select('#mydropdown').node().value ;
//         if (selectedOption == 'dataset1') {
//             makePlot(d1);
//         }
//         if (selectedOption == 'dataset2') {
//             makePlot(d2);
//         }
//     }
// )


// //js homework event handling

// showTable(data);

// d3.select('form').on('submit', handleSubmit);
// d3.select('button').on('click', handleSubmit);

// function showTable(data) {
//     d3.select('tbody').html('');
//     data.forEach(obj => {
//         var row = d3.select('tbody').append('tr');
//         Object.values(obj).forEach(val => {
//             var cell = row.append('td');
//             cell.text(val);
//         });
//     });
// };

// function handleSubmit() {
//     d3.event.preventDefault();
//     var filteredData = data;
//     var value = d3.select('input').property('value');
//     if (value){
//         filteredData=filteredData.filter(obj=>obj.datetime==value);
//     };
//     d3.select('input').node().value = "";
//     showTable(filteredData);
// };



// // buble chart with D3
// // set the dimensions and margins of the graph
// var margin = {top: 10, right: 20, bottom: 30, left: 50},
//     width = 500 - margin.left - margin.right,
//     height = 420 - margin.top - margin.bottom;
// // append the svg object to the body of the page
// var svg = d3.select("#my_dataviz")
//   .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform",
//           "translate(" + margin.left + "," + margin.top + ")");
// //Read the data
// d3.csv("happiness.csv").then(function(data) {
//   data.forEach(function(data) {
//     data.gdpPercap = +data.gdpPercap;
//     data.happiness = +data.happiness;
//     data.pop = +data.pop;
//   });
//   console.log(d3.extent(data, d => d.gdpPercap));
//   // Add X axis
//   var x = d3.scaleLinear()
//     .domain(d3.extent(data, d => d.gdpPercap))
//     .range([ 0, width ]);
//   svg.append("g")
//     .attr("transform", "translate(0," + height + ")")
//     .call(d3.axisBottom(x));
//   // Add Y axis
//   var y = d3.scaleLinear()
//     .domain(d3.extent(data, d => d.happiness))
//     .range([ height, 0]);
//   svg.append("g")
//     .call(d3.axisLeft(y));
//   // Add a scale for bubble size
//   var z = d3.scaleLinear()
//     .domain(d3.extent(data, d => d.pop))
//     .range([ 1, 40]);
//   // Add dots
//   svg.append('g')
//     .selectAll("dot")
//     .data(data)
//     .enter()
//     .append("circle")
//       .attr("cx", function (d) { return x(d.gdpPercap); } )
//       .attr("cy", function (d) { return y(d.happiness); } )
//       .attr("r", function (d) { return z(d.pop); } )
//       .style("fill", "#69b3a2")
//       .style("opacity", "0.7")
//       .attr("stroke", "black")
//       var axis_labels = svg.append('g').classed('axis-label', true);
//       axis_labels.append("text")
//       .attr("transform",
//             "translate(" + (width/2) + " ," +
//                            (height + margin.top + 20) + ")")
//       .style("text-anchor", "middle")
//       .text("GDP");
//       axis_labels.append("text")
//       .attr("transform", "rotate(-90)")
//       .attr("y", 0 - margin.left)
//       .attr("x",0 - (height / 2))
//       .attr("dy", "1em")
//       .style("text-anchor", "middle")
//       .text("Happiness");
// })

// // 15.1.4 ilter cities

// function filterCities(city) {
//     return parseInt(city.Increase_from_2016) > 15000;
//   }
  
//   // 2. Use filter() to pass the function as its argument
//   var filteredCities = top15Cities.filter(filterCities);
  
//   //  Check to make sure your filtered your cities.
//   console.log(filteredCities);
  
//   // 3. Use the map method with the arrow function to return all the filtered cities.
//   var cities = filteredCities.map(city => city.City);
  
//   //  Check your filtered cities
//   console.log(cities);
  
//   // 4. Use the map method with the arrow function to return all the filtered cities population.
//   var population = filteredCities.map(city => city.population);
  
//   //  Check the populations of your filtered cities
//   console.log(population);
  
//   // 5. Create your trace.
//   var trace1 = {
//     x: cities,
//     y: population,
//     type: "bar"
//   };
  
//   // 6. Create the data array for our plot
//   var data = [trace1];
  
//   // 7. Define our plot layout
//   var layout = {
//     title: "Cities that added more than 15,000 people in 2017",
//     xaxis: { title: "City" },
//     yaxis: { title: "2017 Population"}
//   };
  
//   // 8. Plot the chart to a div tag with id "bar-plot"
//   Plotly.newPlot("bar-plot", data, layout);
  
//   // Bonus challenge.
//   //  Create a chart of the rate of growth (% of 2016 populations) of the filtered cities.
//   //  Plot the chart to a div tag with id "rate-bar-plot"
  
//   var pop_rate = filteredCities.map(city => {
//     // get the city's 2016 population 
//     var pop2016 = parseInt(city.population) - parseInt(city.Increase_from_2016);
  
//     var increase = parseInt(city.Increase_from_2016);
  
//     return 100 * increase / pop2016;
//   })
  
//   // Create the second trace.
//   var trace2 = {
//     x: cities,
//     y: pop_rate,
//     type: "bar"
//   };
  
//   //  Create the data2 array for our plot
//   var data2 = [trace2];
  
//   // Define our plot layout
//   var layout = {
//     title: "Cities that added more than 15,000 people in 2017",
//     xaxis: { title: "City" },
//     yaxis: { title: "Population Growth Rate (%)"}
//   };
  
//   // Plot the chart to a div tag with id "rate-bar-plot"
//   Plotly.newPlot("rate-bar-plot", data2, layout);