function funcion(x){
    if(x>10){
        alert("Muchos mensajes");
    }else{
        alert("Pocos mensajes");
    }
}

function funcion2(x){
    var ejecutar;
    if(x>10){
        ejecutar = false;
    }else{
        ejecutar = true;
    }
    return ejecutar;
}
    
function validar_formulario(e){
    
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    var correo = document.getElementById("correo").value;
    
    var caracteres_usuario = usuario.length;
    var caracteres_password = password.length;
    var caracteres_correo = correo.length;

    var registrar = true;

    if(caracteres_usuario<8){
        alert("El usuario debe tener al menos 8 caracteres");
        e.returnValue = false;
        registrar = false;
    }

    if(caracteres_password<8){
        alert("La contraseña debe tener al menos 8 caracteres");
        e.returnValue = false;
        registrar = false;
    }

    var formato_correo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!correo.match(formato_correo)){
        alert("Correo inválido!");
        e.returnValue = false;
        registrar = false;
    }         
    if(registrar){
        alert("Usuario registrado!");
    }
}

/*var mensaje = prompt("Ingrese su nombre","");
var num = prompt("Ingrese un número","");
if(mensaje=="Miguel"){
    funcion(num);
    if(funcion2(num)==true){
        for(var i=0;i<num;i++){
            alert("Alert #" + i);          
        }
        document.write('Hola ' + mensaje);
    }else{
        alert("No se pueden ingresar valores mayores a 10!");
    }
    
}else{
    alert("Usuario no registrado!");  
}*/
    //alert("Hola mundo!");