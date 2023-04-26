
(function ($) {
    "use strict";
    /*==================================================================
    [ Focus input ]*/
    function requestID() {
        var settings = {
            "url": 'https://script.google.com/macros/s/AKfycbwk_vdF0ijq2ihD-D-higV_J8QfPL6S_lsa7-k3tGNvkeGezbG2N6BSy39fVOwUj1eWNA/exec',
            "type": "POST",
            "data":JSON.stringify({
                "token": localStorage.getItem('token'),
            }),
            success: function(){
                // alert( "Gracias" );
            },
            error: function() {
                Swal.fire('Error de conexión','','info')
                document.getElementById('login').removeAttribute('disabled')
            }
        };
        $.ajax(settings).done(function (response) {
            
            if (response === 'ok') {
                console.log(response);
                document.getElementById('iframe').src = "https://innovationlabtbcmx.retool.com/embedded/public/34f2e024-b956-4cef-9111-0c1c5e1a1a9a"
            }else{
                location.href = '../index.html'
            }
        })
    }
    let iframe = document.getElementById('iframe');

    iframe.addEventListener('load', function() {
    iframe.contentDocument.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });
    });
    document.addEventListener('contextmenu', event => event.preventDefault());
    requestID()
    // document.getElementById('login').addEventListener('click',()=>{
    //     var check = true;

    //     for(var i=0; i<input.length; i++) {
    //         if(validate(input[i]) == false){
    //             showValidate(input[i]);
    //             check=false;
    //         }
    //     }

    //     if (check) {
    //         document.getElementById('login').setAttribute('disabled', '')
    //         var settings = {
    //             "url": 'https://script.google.com/macros/s/AKfycbwpnpjRGRkQo47nFzFFFfiahCywY_IfwuAoL6CA0xcg3EERdzfrWFexQ6zPs8C62ikdwg/exec',
    //             "type": "POST",
    //             "data":JSON.stringify({
    //                 "user": document.getElementById('username').value,
    //                 "pass": document.getElementById('pass').value,
    //             }),
    //             success: function(){
    //                 // alert( "Gracias" );
    //             },
    //             error: function() {
    //                 Swal.fire('Error de conexión','','info')
    //                 document.getElementById('login').removeAttribute('disabled')
    //             }
    //         };
    //         $.ajax(settings).done(function (response) {
                
    //             if (response != 'Failed') {
    //                 localStorage.setItem('token', response)
    //             }else{
    //                 Swal.fire('Usuario o contraseña inválidos','Por favor intenta escribiendo de nuevo tu usuario y contraseña.','error').then(()=>location.reload())
    //             }
    //             // Swal.fire({
    //             //     title: 'Enviado con éxito',
    //             //     text: 'Tu mensaje se ha enviado satisfactoriamente, pronto nos pondremos en contacto contigo.',
    //             //     imageUrl: '../assets/img/logoL.png',
    //             //     imageWidth: 200,
    //             //     imageHeight: 100,
    //             //     imageAlt: 'E2B Logo',
    //             //     confirmButtonColor: '#5D9F9E'
    //             // }).then(()=>location.reload())
                
    //         })
    //     }

    //     return check;
    // })


})(jQuery);