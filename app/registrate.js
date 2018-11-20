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
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.log('Error:', error));
}

$(document).ready(function(){
    $("#btn").click(function(){
        registrarse();
    });
});