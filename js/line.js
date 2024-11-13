google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawLine);

function drawLine() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses'],
      ['2004',  1000,      400],
      ['2005',  1170,      460],
      ['2006',  660,       1120],
      ['2007',  1030,      540]
    ]);

    var options = {
      title: 'Company Performance',
      curveType: 'function',
      legend: { position: 'bottom',
        color:'white'
       },
       backgroundColor:'#353238',
    };

    var chart = new google.visualization.LineChart(document.getElementById('div2'));

    chart.draw(data, options);
  }