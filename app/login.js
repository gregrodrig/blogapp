$(document).ready(function(){
    $("#btnlogin").click(function(){
        
       btnlogin();
    });
});

function btnlogin(){
    let email = $("#user").val();
    let password = $("#lpassword").val();
    
    // validar no esten en blanco
    if(email==""){
        alert("Usuario no puede estar vacío; favor colocar su Correo Electrónico!");
        return;
     }else if(password==""){
         alert("La contraseña está vacía!");
         return;
         
     }

    //let equivalente a var..esto es lo que se usa en la actualidad ECMAScript
    let data = {
        email : email,
        password: password
    }
    console.log(data);
    
    fetch("http://68.183.27.173:8080/login",{
        method:'POST', //or 'PUT'
        body: JSON.stringify(data),
        headers:{
            'Content-Type':'Application/json'
        }
    }).then(res =>res.json())
    .then(response =>{
        //almacenamos el valor de la clave en token
        localStorage.setItem('token', response.token);
        //console.log('Sussess',JSON.stringify(response))
        location.href= "index.html";
        //recorrer el localStorage
        for (i=0;i<localStorage.length;i++){
            let llave=localStorage.key(i);
            var datos = localStorage.getItem(llave);    
            //console.log(datos);
        } 
        console.log(datos);
        //console.log(JSON.parse(localStorage.getItem('token')));
    })       
        .catch(error =>
            console.log('Error',error)); 


}