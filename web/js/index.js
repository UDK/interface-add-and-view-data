$(document).ready(function () {
    $('#add_country_button').click(function () {
        var parametrs = {};
        parametrs['country'] = $('#input_country').val();
        parametrs['act'] = true;
        $.ajax({
            url: '../php/response.php',
            type: 'POST',
            data: parametrs,
            success: function (data) {
                alert(data)
            }
        })
    })
    $('#view_db').click(function () {
        let parmetrs_request = {};
        parmetrs_request['switch'] = true;
        $.ajax({
            url: '../php/response.php',
            type: 'GET',
            data: parmetrs_request,
            success(data) {
                let db_data = JSON.parse(data);
                let length_db = Object.keys(db_data).length;
                for (var i = 0; i < length_db; i++) {
                    $("#123").remove();
                }
                for (var i = 0; i < length_db; i++) {
                    $(".table_country_view").append("<tr id='123'><th scope='row'>" + i.toString() + "</th><td>" + db_data[i.toString()] + "</td></tr>")
                }

            }
        })
    })
})