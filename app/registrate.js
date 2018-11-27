function registrarse(){
    var email = $("#email").val();
    var name = $("#name").val();
    var password = $("#password").val();
    var password2 = $("#password2").val();

    if(password != password2){
        alert("Las contraseñas no coinciden");
        return;
    }


    var data = {
        name: name,
        email: email,
        password: password
    }
    console.log(data);

    fetch('http://68.183.27.173:8080/register',{
        method: 'POST', 
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(response => {
        console.log('Success:', JSON.stringify(response))
        location.href="login.html";
    })
    .catch(error => console.log('Error:', error));
}

$(document).ready(function(){
    $("#btnRegistrar").click(function(){
        registrarse();
    });
});


// Register/Login validation from Template Bootstrap 
// $('.js-tilt').tilt({
//     scale: 1.1
// })

// (function ($) {
// "use strict";


/*==================================================================
[ Validate ]*/
// var input = $('.validate-input .input100');

// $('.validate-form').on('submit',function(){
// var check = true;

// for(var i=0; i<input.length; i++) {
//     if(validate(input[i]) == false){
//         showValidate(input[i]);
//         check=false;
//     }
// }

// return check;
// });


// $('.validate-form .input100').each(function(){
// $(this).focus(function(){
//    hideValidate(this);
// });
// });

// function validate (input) {
// if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
//     if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
//         return false;
//     }
// }
// else {
//     if($(input).val().trim() == ''){
//         return false;
//     }
// }
// }

// function showValidate(input) {
// var thisAlert = $(input).parent();

// $(thisAlert).addClass('alert-validate');
// }

// function hideValidate(input) {
// var thisAlert = $(input).parent();

// $(thisAlert).removeClass('alert-validate');
// }



// })(jQuery);