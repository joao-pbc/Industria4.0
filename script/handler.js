google.charts.load('current', {'packages':['corechart']});

//Tem que trocar dependendo da sala
const urlBase = "http://10.26.92.250:5678/api/"

async function connect(url){
 const respone = await fetch(url);
 return await respone.json();
}

function chamarApiComUrl(objeto) {
  const url = urlBase + objeto;
  const data = connect(url);
  return data;
}

