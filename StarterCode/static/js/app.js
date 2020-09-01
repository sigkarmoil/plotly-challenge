// extracting data from json

var url = "././samples.json"

// d3.json(url).then(function(data) {
//     console.log(data["names"]);
//   });


// fetch("././samples.js").then(response => response.json()).then(json => console.log(json))

// Create unpack function
function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }




// function get all will capture everything
function buildPlot() {
    
    d3.json(url).then(function(data) {
        // Grab values from the response json object to build the plots
        // console.log(data)

        // filter function!!!!!!!
        var idSelection = "940"
        function filterId(idSelection) {
            return movie.imdbRating > 8.9;
          }

        //

        var filtered = data["samples"].filter( a => a.id = idSelection )
        console.log(filtered)
        console.log(data)
        var otuIDs = filtered.map(otuId => otuId.otu_ids );
        var otuLabels = filtered.map(otuLabel => otuLabel.otu_labels );
        var sampleValues = filtered.map(value => value.sample_values );

        // var otuIDs = data["samples"].map(otuID => otuID.otu_ids)
        // var otuLabels = data["samples"].map(otuID => otuID.otu_labels);
        // var sampleValues = data["samples"].map(otuID => otuID.sample_values)

        // Print the names of the columns
        // console.log(sampleValues)
        // Print the data for each day
        

        // var dates = data.dataset.data.map(row => row[0]);
        // // console.log(dates);
        // var closingPrices = data.dataset.data.map(row => row[4]);
        // // console.log(closingPrices);
      
    var trace1 = {
      type: "bar",
      x: otuIDs,
      y: sampleValues,
      mode: 'markers',
      marker: {size:16},
      text: otuLabels,
      orientation: 'h'
     
    };
    
    var data =[trace1]

    Plotly.newPlot('bar', data);
    })
}



buildPlot()


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


