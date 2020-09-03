// extracting data from json

var url = "././samples.json"
var selDat = d3.select("#selDataset")

// add data to the selection
d3.json(url).then(function(data) {
  var idNames = data.names
  console.log(idNames)
  idNames.forEach( d=> {
    selDat.append("option").text(d)

    } )

})
  // })



// Dropdown change handler

  // Prevent the page from refreshing
  
  // Select the input value from the form

selDat.on("change", function(){
  d3.event.preventDefault();
  var idCapture = this.value
  })


function getId() {
  selDat.on("change", function(){
    d3.event.preventDefault();
    var idCapture = this.value
    })  
}

  // clear the input value
  // d3.select("#stockInput").node().value = "";

  // Build the plot with the new stock
  // buildPlot(stock);



// function get all will capture everything
function buildCircle() {
    
    d3.json(url).then(function(data) {
        var idNames = data.names
        getId()
        var idNum = idNames.findIndex( x => x == idCapture )
        var otuIdRaw = data["samples"][idNum]["otu_ids"]
        var otuidMapped = otuIdRaw.map( otu => "OTU " + String(otu) )
        // var otuIds = otuIdSorted.slice(otuIdSorted.length -10, otuIdSorted.length  )
        var otuLabels = data["samples"][idNum]["otu_labels"]
        var sampleValues = data["samples"][idNum]["sample_values"]
        // console.log(otuidMapped)

        // Print the names of the columns
        // console.log(sampleValues)



      var trace2 = {
        x: otuIdRaw,
        y: sampleValues,
        mode: 'markers',
        text: otuLabels,
        marker: {
          color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)','rgb(30, 5, 57)'],
          opacity: [1, 0.8, 0.6, 0.4],
          size: sampleValues,
          
        }
      };
    ;
    

    var data2 = [trace2];

var layout2 = {
  title: 'Bubble Chart',
  showlegend: false,
  height: 600,
  width: 600
};

    // Plotly.newPlot('bar', data);
    Plotly.newPlot('bubble', data2, layout2);
    })
}

// function get all will capture everything
function buildDiagram() {
    
  d3.json(url).then(function(data) {
    // create object containing only 
    var idNames = data.names
    var idNum = 0
    var otuIdRaw = data["samples"][idNum]["otu_ids"]
    var otuidMapped = otuIdRaw.map( otu => "OTU " + String(otu) )
    var sampleValues = data["samples"][idNum]["sample_values"]

    var idObj = {};
    otuidMapped.forEach((key, i) => idObj[key] = sampleValues[i]);
    console.log(idObj);

    var idSort = [];
    for ( var id in idObj ) {
      idSort.push( [ id, idObj[id] ] );
    }
    
    idSort.sort( function(a, b) {
    return a[1] - b[1]
    })
    
    var idReversed = idSort.reverse()
    var idRevSlice = idReversed.slice( 0,10 )
    
    var yDia = idRevSlice.map(d => d[0])
    var xDia = idRevSlice.map(d => d[1])
    var xReverse = xDia.reverse()
    console.log(yDia)

      // Print the names of the columns
      // console.log(sampleValues)

  var trace1 = {
    type: "bar",
    x: xReverse,
    y: yDia,
    mode: 'markers',
    marker: {size:38},
    // text: otuLabels,
    orientation: 'h'
    }


  
  var data =[trace1]


var layout2 = {
title: 'Bubble Chart',
showlegend: false,
height: 600,
width: 600
};

  Plotly.newPlot('bar', data);

  })
}

function buildCard() {
    
  d3.json(url).then(function(data) {
      var idNames = data.names
      var idNum = 0
      var id = data.metadata[idNum]["id"]
      var ethnicity = data.metadata[idNum]["ethnicity"]
      var gender = data.metadata[idNum]["gender"]
      var age = data.metadata[idNum]["age"]
      var location = data.metadata[idNum]["location"]
      var bbtype = data.metadata[idNum]["bbtype"]
      var wfreq = data.metadata[idNum]["wfreq"]

      console.log(wfreq)
      // Select
      var sampleBody = d3.select("#sample-metadata");
      sampleBody.append('div').text(`id: ${id}`)
      sampleBody.append('div').text(`ethnicity: ${ethnicity}`)
      sampleBody.append('div').text(`gender: ${gender}`)
      sampleBody.append('div').text(`age: ${age}`)
      sampleBody.append('div').text(`location: ${location}`)
      sampleBody.append('div').text(`bbtype: ${bbtype}`)
      sampleBody.append('div').text(`wfreq: ${wfreq}`)
  })
}




buildCircle()
buildCard()
buildDiagram()


    // function get specific will capture everything
// function getAll(stock) {
//     d3.json(url).then(function(data) {
//   // Grab values from the response json object to build the plots
//   var name = data.dataset.name;
//   var stock = data.dataset.dataset_code;
//   var startDate = data.dataset.start_date;
//   var endDate = data.dataset.end_date;
//   // Print the names of the columns
//   console.log(data.dataset.column_names);
//   // Print the data for each day
//   console.log(data.dataset.data);
//   var dates = data.dataset.data.map(row => row[0]);
//   // console.log(dates);
//   var closingPrices = data.dataset.data.map(row => row[4]);
//   // console.log(closingPrices);


  
// // Display the default plot
// function init() {
//     var data = [{
//       values: us,
//       labels: labels,
//       type: "pie"
//     }];
  
//     var layout = {
//       height: 600,
//       width: 800
//     };
  
//     Plotly.newPlot("pie", data, layout);
//   }


