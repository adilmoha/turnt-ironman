/**
 * Created by adila on 15-09-2016.
 */
$(document).ready(function () {
    $.getJSON("ex.json", function(result){
        console.log(result);
        $.each(result, function(i, field){

            $("#table_data").append("<tr><td>"+field.name+ "</td><td>"+field.date+"</td><td> "+field.assigned+"</td></tr>");
        });
    });
});