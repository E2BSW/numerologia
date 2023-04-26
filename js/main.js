
(function ($) {
    "use strict";
    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });

    document.getElementById('login').addEventListener('click',()=>{
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        if (check) {
            document.getElementById('login').setAttribute('disabled', '')
            var settings = {
                "url": 'https://script.google.com/macros/s/AKfycbwpnpjRGRkQo47nFzFFFfiahCywY_IfwuAoL6CA0xcg3EERdzfrWFexQ6zPs8C62ikdwg/exec',
                "type": "POST",
                "data":JSON.stringify({
                    "user": document.getElementById('username').value,
                    "pass": document.getElementById('pass').value,
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
                
                if (response != 'Failed') {
                    localStorage.setItem('token', response)
                }else{
                    Swal.fire('Usuario o contraseña inválidos','Por favor intenta escribiendo de nuevo tu usuario y contraseña.','error').then(()=>location.reload())
                }
                // Swal.fire({
                //     title: 'Enviado con éxito',
                //     text: 'Tu mensaje se ha enviado satisfactoriamente, pronto nos pondremos en contacto contigo.',
                //     imageUrl: '../assets/img/logoL.png',
                //     imageWidth: 200,
                //     imageHeight: 100,
                //     imageAlt: 'E2B Logo',
                //     confirmButtonColor: '#5D9F9E'
                // }).then(()=>location.reload())
                
            })
        }

        return check;
    })

    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
            hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    /*==================================================================
    [ Show pass ]*/
    var showPass = 0;
    $('.btn-show-pass').on('click', function(){
        if(showPass == 0) {
            $(this).next('input').attr('type','text');
            $(this).addClass('active');
            showPass = 1;
        }
        else {
            $(this).next('input').attr('type','password');
            $(this).removeClass('active');
            showPass = 0;
        }
        
    });


})(jQuery);