// google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(drawChart);


//TEMPLATE PRA SETAR O GRÀFICO DE PIZZA
// function desenharGraficoDeProdutos(data) {
//     var data = google.visualization.arrayToDataTable([
//         ['Task', 'Hours per Day'],
//         ['Work',     11],
//         ['Eat',      2],
//         ['Commute',  2],
//         ['Watch TV', 2],
//         ['Sleep',    7]
//       ]);

//       var options = {
//         title: 'Quantidade de itens'
//       };

//       var chart = new google.visualization.PieChart(document.getElementById(''));

//       chart.draw(data, options);
// }

connectToDatabase();

//TEMPLATE PRA CONNECTAR COM O BANCO
function connectToDatabase() {
    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "projeto_industria"
    });

    con.connect(function (err) {
        if (err) throw err;
        
        let data = con.query("select * from pedidos LIMIT 1", function(err, result, fields){
            console.log(result);
        });
        
        
    });
}