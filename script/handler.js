google.charts.load('current', {'packages':['corechart']});

async function connect(url){
 const respone = await fetch(url);
 return await respone.json();
}

function drawPieChart(objeto) {
  const url = 'http://10.26.92.250:5678/api/' + objeto;
  const data = connect(url);
  return data;
}

