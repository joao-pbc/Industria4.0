google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Element", "Pedidos", { role: "style" }],
    ["Pedidos em Montagem", 356, "#F2E205"],
    ["Pedidos em Processo", 251, "#5581D9"],
    ["Pedidos Finalizados", 1987, "#F2E205"],
    ["Pedidos Liberados", 1900, "#5581D9"],
    ["Pedidos Cancelados", 89, "#F2E205"]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
    {
      calc: "stringify",
      sourceColumn: 1,
      type: "string",
      role: "annotation"
    },
    2]);

  var options = {
    title: "Status de Pedidos",
    titleTextStyle: {
      color: 'white',
    },
    width: "100%",
    height: "100%",
    bar: { groupWidth: "95%" },
    legend: { position: "none", },
    backgroundColor: "#6A6868",
    hAxis: {
      textStyle: {
        color: 'white',
      }
    },
    vAxis: {
      textStyle: {
        color: 'white',
      }
    },
  };
  var chart = new google.visualization.BarChart(document.getElementById("div3"));
  chart.draw(view, options);
}