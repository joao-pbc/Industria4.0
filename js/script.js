google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawTable);

function drawTable() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Nome');
  data.addColumn('number', 'Quantidade total');
  data.addRows([
    ['Peça Vermelha', {v: 10000, f: '10 unidades'}],
    ['Peça Azul', {v: 8000, f: '15 unidades'}],
    ['Peça Preta', {v: 12500, f: '11 unidades'}],
    ['Peça Amarela', {v: 7000, f: '3 unidades'}]
  ]);

  var table = new google.visualization.Table(document.getElementById('div2'));

  var options = {
    width: "100%",
    height: "100%",
    allowHtml: true
  };

  table.draw(data, options);
}
