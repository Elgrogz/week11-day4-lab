var data = null;


var makeRequest = function(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    request.send();
}

var requestComplete = function() {
  if (this.status !== 200) return;
  var jsonString = this.responseText;
  data = JSON.parse(jsonString);

  populateEuropeanChart();
} 

var populateEuropeanChart = function() {
  var container = document.querySelector('#column-chart-europe');
  var populationData = [];
  for (var country of data) {
    if (country.region === "Europe") {
      populationData.push({name: country.name, data: [country.population]});
    }
  }
  new ColumnChart(container, populationData);
}

window.onload = function() {
  var url = "https://restcountries.eu/rest/v1/all";
  makeRequest(url, requestComplete);  

  // console.log(populationData)

  // var series = {name: "Cohort 8", data: [4, 5, 6, 7]};

}