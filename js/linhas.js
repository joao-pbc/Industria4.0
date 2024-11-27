google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

async function drawChart() {
  var data = await chamarApiComUrl("ProductionOrders");
  var dataTable = getDataTableForTable2(data.productionOrders);  // Passando os dados de productionOrders

  var chart = new google.visualization.LineChart(document.getElementById('div4'));
  var options = getOptions();
  chart.draw(dataTable, options);  // Passando o dataTable para desenhar o gráfico
}

function getDataTableForTable2(productionOrders) {
  var dataTable = new google.visualization.DataTable();
  
  // Adicionando as colunas necessárias
  dataTable.addColumn('string', 'Status do Pedido');  // Coluna para o eixo X (status do pedido)
  dataTable.addColumn('number', 'Quantidade de Pedidos');  // Coluna para o eixo Y (quantidade de pedidos)

  // Verificando se productionOrders é um array válido
  if (productionOrders && Array.isArray(productionOrders)) {
    // Criando um objeto para contar as ocorrências de cada productionOrderStatusId
    var statusCount = {};

    // Contando as ocorrências de cada status
    productionOrders.forEach(order => {
      if (order.productionOrderStatusId !== undefined) {
        if (statusCount[order.productionOrderStatusId]) {
          statusCount[order.productionOrderStatusId] += 1;  // Incrementa a contagem para esse status
        } else {
          statusCount[order.productionOrderStatusId] = 1;  // Inicializa a contagem para esse status
        }
      }
    });

    // Adicionando as linhas no DataTable com a contagem por status
    for (var status in statusCount) {
      if (statusCount.hasOwnProperty(status)) {
        // Adiciona uma linha para cada status com a sua contagem
        dataTable.addRow([status, statusCount[status]]);
      }
    }
  } else {
    console.error('productionOrders não é um array válido', productionOrders);
  }

  return dataTable;  // Retornando o DataTable preenchido
}
function getOptions() {
  return {
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
}
