google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Atual', 70],
    ['Falta', 30],
  ]);

  var options = {
    title: 'Meta Mensal',
    titleTextStyle: {
      color: 'white', 
      fontName: 'Arial', 
    },
    is3D: true,
    backgroundColor: "#6A6868",
    slices: {
      0: { 
        color: '#5581D9' 
      },
      1: { 
        color: '#F2E205' 
      }
    },
    legend: {
      textStyle: {
        color: 'white', 
        fontSize: 10, 
      },
    },
  };

  var chart = new google.visualization.PieChart(document.getElementById('div5'));
  chart.draw(data, options);
}