google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawTable);

async function drawTable() {
  var data = await drawPieChart();
  var table = new google.visualization.Table(document.getElementById('div2'));
  var options = {
    width: "100%",
    height: "100%",
    backgroundColor: "#6A6868",
  };
  table.draw(data, options);
}
