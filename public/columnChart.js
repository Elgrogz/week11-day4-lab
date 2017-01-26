var ColumnChart = function(seriesToAdd) {
  var container = document.querySelector('#column-chart');


  // var addSeries = function(nameToAdd, dataToAdd) {
  //   console.log(this);
  //   this.series.push({name: nameToAdd, data: dataToAdd});
  //   console.log(nameToAdd);
  // }

  var chart = new Highcharts.Chart({
    chart: {
      type: "column",
      renderTo: container
    },
    title: {
        text: "Populationzzzzz"
    },
    series: 
      seriesToAdd
    ,
    xAxis: {
      categories: ["Country"]
    }
  });
}