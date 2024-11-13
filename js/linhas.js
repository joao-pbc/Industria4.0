google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Mes', 'Faturamento'],
    ['Jan.', 1000],
    ['Fev.', 1170],
    ['Mar.', 660],
    ['Abr.', 1030],
    ['Mai.', 1500],
    ['Jun.', 950],
    ['Jul.', 870],
    ['Ago.', 1200],
    ['Set', 999],
    ['Out.', 1245],
    ['Nov.', 900],
    ['Dez.', 2000],
  ]);

  var options = {
    title: 'Faturamento Mensal', 
    titleTextStyle: {
      color: 'white',  
    },
    curveType: 'function',
    legend: {
      position: 'bottom',
      textStyle: {
        color: 'white',    
      }
    },
    width: "100%",
    height: "100%",
    backgroundColor: "#6A6868",
    hAxis: {
      title: 'Meses',
      titleTextStyle: {
        color: 'white',  
      },
      textStyle: {
        color: 'white',  
      }
    },
    vAxis: {
      title: 'Faturamento',
      titleTextStyle: {
        color: 'white',  
      },
      textStyle: {
        color: 'white',  
      }
    },
    series: {
      0: { color: '#F2E205' } 
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('div4'));
  chart.draw(data, options);
}
