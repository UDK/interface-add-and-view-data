$(document).ready(function () {
    $('#add_country_button').click(function () {
        var daw = {};
        daw['country'] =$('#input_country').val();
        $.ajax({
            url: '../php/response.php',
            type: 'POST',
            data: daw,
            success: function (data) {
                alert(data)
            }
        })
    })
})