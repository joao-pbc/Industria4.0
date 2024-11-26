// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});
// Set a callback to run when the Google Visualization API is loaded.

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
