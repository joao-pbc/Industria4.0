google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Element", "Density", { role: "style" } ],
    ["Pedidos em montagem", 8.94, "#b87333"],
    ["Pedidos em processos", 10.49, "silver"],
    ["Pedidos Finalizados", 19.30, "gold"],
    ["Pedidos Liberados", 21.45, "color: #e5e4e2"],
    ["Pedidos Cancelados", 10.49, "silver"],

  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
                   { calc: "stringify",
                     sourceColumn: 1,
                     type: "string",
                     role: "annotation" },
                   2]);

  var options = {
    title: "Faturamento Diário",
    width: 600,
    height: 400,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };
  var chart = new google.visualization.BarChart(document.getElementById("div3"));
  chart.draw(view, options);
}