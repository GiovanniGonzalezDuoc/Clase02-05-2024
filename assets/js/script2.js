$(document).ready(function(){
    let username="";

    $('#btnEnviar').click(function(e){
        e.preventDefault();
        if ($('#username').val() ===""){
            return;
        };

        username = $('#username').val();
        let formData={
            username,
            password: $('#password').val()
        };

        $.ajax({
            url:'https://jsonplaceholder.typicode.com/posts',
            type: 'POST',
            dataType: 'json',
            data: formData,
            success: function(response){
                console.log('Respuesta del servidor: ',response);
            },
            error:function(xhr,status,error){
                console.error('Error al enviar la solicitud: ',error);
            }
        });
    });
});
