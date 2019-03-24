$(document).ready(
    function ()
    {
        $('#add_country_button').click(
            function ()
            {
                let parametrs = {};
                parametrs['country'] = $('#input_country').val();
                parametrs['act'] = true;
                $.ajax(
                    {
                    url: './php/response.php',
                    type: 'POST',
                    data: parametrs,
                    success: function (data)
                    {
                        alert(data)
                    }
                })
            })

        $('#view_db').click(
            function ()
            {
                let parmetrs_request = {};
                parmetrs_request['switch'] = true;
                $.ajax(
                    {
                    url: './php/response.php',
                    type: 'GET',
                    data: parmetrs_request,
                    success(data)
                    {
                        let db_data = JSON.parse(data);
                        let length_db = Object.keys(db_data).length;
                        for (let i = 0; i < length_db; i++)
                        {
                            $("#remove_id").remove();
                        }
                        for (let i = 0; i < length_db; i++)
                        {
                            $(".table_country_view").append("<tr id='remove_id'><th scope='row'>" + (i+1).toString() + "</th><td>" + db_data[i.toString()] + "</td></tr>")
                        }

                    }
                })
            })
    })