google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawTable);

async function drawTable() {
  var data = await chamarApiComUrl("Inventory");
  var dataTable = getDataTableForTable(data);
  var table = new google.visualization.Table(document.getElementById('div2'));
  var options = {
    width: "100%",
    height: "100%",
    allowHtml: true
  };
  table.draw(dataTable, options);
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
