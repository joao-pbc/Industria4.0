google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawLine);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Element", "Density", { role: "style" } ],
    ["Pedidos em montagem", 8.94, "#b694d6"],
    ["Pedidos em processos", 10.49, "color: #a26fd1"],
    ["Pedidos já Finalizados", 19.30, "color: #9050cc"],
    ["Pedidos já Liberados", 21.45, "color: #8036C5"],
    ["Pedidos Cancelados", 10.49, "color: #521a87"],

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
    titleTextStyle:{color:"white"},
    width: 600,
    height: 400,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
    backgroundColor:'#353238',
    vAxis: 
        {
          textStyle: {color: 'white'}
        },
      hAxis: 
        {
          textStyle: {color: 'white'}
        },
    
  };
  var chart = new google.visualization.BarChart(document.getElementById("div4"));
  chart.draw(view, options);  
}

function drawLine() {
    var data = google.visualization.arrayToDataTable([
      ['Mês', 'Vendas', 'Despesas'],
      ['1',  100,      300],
      ['2',  120,      1300],
      ['3',  300,      1300],
      ['4',  1200,      1400],
      ['5',  6000,      12000],
      ['6',  15000,      13000],
      ['7',  16500,      14000],
      ['8',  18200,      13750],
      ['9',  22000,      14000],
      ['10',  17000,    15000],
      ['11',  21000,      15400]
    ]);

    var options = {
      title: 'Financeiro Mensal',
      titleTextStyle:{color:"white"},
      curveType: 'function',
      legend: { position: 'bottom' },	
      color: '#000000',
      backgroundColor:'#353238',
      vAxis: 
        {
          textStyle: {color: 'white'}
        },
      hAxis: 
        {
          textStyle: {color: 'white'}
        },
        legend:
        {
          textStyle:{color:'white'},
        }

        
      

      
    };

    var chart = new google.visualization.LineChart(document.getElementById('div3'));

    chart.draw(data, options);
  }
