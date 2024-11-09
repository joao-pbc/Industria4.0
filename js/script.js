google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawTable);

function drawTable() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Nome');
  data.addColumn('number', 'Quantidade total');
  data.addColumn('boolean', 'Capacidade');
  data.addRows([
    ['Peça Vermelha',  {v: 10000, f: '10 unidades'}, true],
    ['Peça Azul',   {v:8000,   f: '15 unidades'},  false],
    ['Peça Preta', {v: 12500, f: '11 unidades'}, true],
    ['Peça Amarela',   {v: 7000,  f: '3 unidades'},  true]
  ]);

  var table = new google.visualization.Table(document.getElementById('div2'));

  table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
}