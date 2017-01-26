var ColumnChart = function(containerToAdd, seriesToAdd) {


  // var addSeries = function(nameToAdd, dataToAdd) {
  //   console.log(this);
  //   this.series.push({name: nameToAdd, data: dataToAdd});
  //   console.log(nameToAdd);
  // }

  var chart = new Highcharts.Chart({
    chart: {
      type: "column",
      renderTo: containerToAdd
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