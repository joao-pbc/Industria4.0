$(document).ready(function () {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://10.26.92.250:5678/api/productionOrders/",
        success: function (response) {
            
            const productionOrders = response.productionOrders;


            $('#productionOrders').DataTable({
                data: productionOrders, 
                columns: [
                    { 'data': 'code' },        
                    { 'data': 'productCode' }, 
                    { 'data': 'startTime' },   
                    { 'data': 'finishTime' }   
                ],
                scrollY: "calc(100% - 20px)", 
                scrollX: true,                
                autoWidth: false,             
                columnDefs: [
                    {
                        targets: [2, 3], 
                        render: function (data, type, row) {
                            if (data) {
                                return new Date(data).toLocaleString(); 
                            }
                            return 'N/A'; 
                        }
                    }
                ]
            });
        },
        error: function (xhr, status, error) {
            console.error("Erro na requisição:", error);
        }
    });
});
