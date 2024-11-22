// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});
// Set a callback to run when the Google Visualization API is loaded.

<<<<<<< HEAD
async function connect(url){
 const respone = await fetch(url);
 return await respone.json();
}

async function drawPieChart() {
  const url = 'http://10.3.17.186:5678/api/Inventory';
  const data = await connect(url);
  var dataTable = getDataTableForTable(data);
  return dataTable;
}

function getDataTableForTable(jsonObject) {
  dataTable = new google.visualization.DataTable();
  dataTable.addColumn('string', 'Nome');
  dataTable.addColumn('number', 'Quantidade total');
  jsonObject.productsInventory.forEach(product => {
    dataTable.addRow(
      [product.productCode,  {v: product.quantity}]
    )
  });
  return dataTable;
}
=======
// google.charts.load("current", {packages:["corechart"]});
// google.charts.setOnLoadCallback(drawChart);
// const url = 'http://localhost:5678/api/Products';

// function connect(){
//     fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json(); // Parse the JSON from the response
//     })
//     .then(data => {
//       return data; // Handle the data from the response
//     })
//     .catch(error => {
//       console.error('There was a problem with the fetch operation:', error);
//     });
// }

// document.addEventListener('onload', () => {
//     drawChart();
// })


// function drawChart() {

//     var data = connect();

//     // Converter o JSON para o formato do Google Charts
//     var dataArray = [['Label', 'Batch Size']]; // Cabeçalho das colunas

//     // Preencher os dados a partir do JSON
//     data.forEach(function(item) {
//     dataArray.push([item.label, item.batchSize]);
//     });

//     // Converter dataArray para um DataTable do Google Charts
//     var dataTable = google.visualization.arrayToDataTable(dataArray);

//     var options = {
//         title: 'Batch Size por Label',
//         chartArea: { width: '50%' },
//         hAxis: {
//           title: 'Batch Size',
//           minValue: 0
//         },
//         vAxis: {
//           title: 'Label'
//         }
//       };

//       var chart = new google.visualization.BarChart(document.getElementById("div3"));
//       chart.draw(dataTable, options);
 
// }
>>>>>>> 7ce8def644b25d2b0c7f31e3aa0ce8866b43464e
