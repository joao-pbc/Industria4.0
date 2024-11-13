
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
const url = 'http://localhost:5678/api/Products';

function connect(){
    fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the JSON from the response
    })
    .then(data => {
      return data; // Handle the data from the response
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

document.addEventListener('onload', () => {
    drawChart();
})


function drawChart() {

    var data = connect();

    // Converter o JSON para o formato do Google Charts
    var dataArray = [['Label', 'Batch Size']]; // Cabeçalho das colunas

    // Preencher os dados a partir do JSON
    data.forEach(function(item) {
    dataArray.push([item.label, item.batchSize]);
    });

    // Converter dataArray para um DataTable do Google Charts
    var dataTable = google.visualization.arrayToDataTable(dataArray);

    var options = {
        title: 'Batch Size por Label',
        chartArea: { width: '50%' },
        hAxis: {
          title: 'Batch Size',
          minValue: 0
        },
        vAxis: {
          title: 'Label'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById("div3"));
      chart.draw(dataTable, options);
 
}