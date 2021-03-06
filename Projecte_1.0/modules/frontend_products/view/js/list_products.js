$(document).ready(function () {
    $.get("modules/frontend_products/controller/controller_frontend_products.class.php?num_pages=true", function (data, status) {
        var json = JSON.parse(data);
        var pages = json.pages;
        //console.log(pages);

        $("#results").load("modules/frontend_products/controller/controller_frontend_products.class.php"); //load initial records

        // init bootpag
        $(".pagination").bootpag({
            total: pages,
            page: 1,
            maxVisible: 3,
            next: 'next',
            prev: 'prev'
        }).on("page", function (e, num) {
            //alert(num);
            e.preventDefault();
            //$("#results").prepend('<div class="loading-indication"><img src="modules/services/view/img/ajax-loader.gif" /> Loading...</div>');
            $("#results").load("modules/frontend_products/controller/controller_frontend_products.class.php", {'page_num': num});

            // ... after content load
            /*$(this).bootpag({
             total: pages, 
             maxVisible: 7
             });*/
        });
        
    }).fail(function (xhr) {
        //console.log(xhr.status);
        //die();
        //var json = JSON.parse(xhr.responseText);
        //alert(json.error);

        //if (xhr.responseText !== undefined && xhr.responseText !== null) {
        //var json = JSON.parse(xhr.responseText);
        //if (json.error !== undefined && json.error !== null) {
        //$("#results").text(json.error);

        //if  we already have an error 404
        if(xhr.status  === 404){
            $("#results").load("modules/products/controller/controller_products.class.php?view_error=false");
        }else{
            $("#results").load("modules/products/controller/controller_products.class.php?view_error=true");
        }
        
        //}
        //}
    });
});
