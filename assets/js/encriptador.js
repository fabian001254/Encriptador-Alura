var boton = document.querySelector("#encriptar");
var boton2 = document.querySelector("#desencriptar");
var copiar = document.querySelector("#copiar");
var estado = false;
var mayus = /[A-Z]/g;
var caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
function textodiv(ver){
    if(ver == false){
        document.getElementById("contenedor-codificado").style.display = "block"; 
        document.getElementById("contenedor-codificado1").style.display = "none";  
    }else{
        document.getElementById("contenedor-codificado").style.display = "none";
        document.getElementById("contenedor-codificado1").style.display = "block";    
    }
    
}
function encriptar(){
    var entrada = document.querySelector("#entrada").value;    
    var mensajeencriptado = "";
    if(entrada == ""){
        Swal.fire('Error','El campo no puede estar vacio','error');
        document.getElementById("contenedor-codificado").style.display = "block";
        textodiv(estado);
    }else if (entrada.match(mayus) != entrada.match(mayus)){
        Swal.fire('Error','No es valido el uso de mayusculas','error');
        document.getElementById("contenedor-codificado").style.display = "block";
        textodiv(estado);
    }else if (entrada.match(caracteres) != entrada.match(caracteres)){
        Swal.fire('Error','No es valido el uso de caracteres especiales','error');
        document.getElementById("contenedor-codificado").style.display = "block";
        textodiv(estado);
      }else{
        for(var i = 0; i < entrada.length; i++){
            letra = "";
            if(entrada[i] == "a"){
                letra = entrada[i].replace("a", "ai");
                mensajeencriptado = mensajeencriptado + letra;
            }else if(entrada[i] == "e"){
                letra = entrada[i].replace("e","enter");
                mensajeencriptado += letra;
            }else if(entrada[i] == "i"){
                letra = entrada[i].replace("i","imes");
                mensajeencriptado +=letra;
            }else if(entrada[i] == "o"){
                letra = entrada[i].replace("o","ober");
                mensajeencriptado += letra;
            }else if(entrada[i] == "u"){
                letra = entrada[i].replace("u","ufat");
                mensajeencriptado += letra;
            }else{
                mensajeencriptado += entrada[i];
            }

        }
        document.getElementById("titulo-resultado").innerHTML="Texto encriptado!";
        document.getElementById("resultado").innerHTML=mensajeencriptado;
        document.getElementById("entrada").value = "";
        textodiv(!estado);
        Swal.fire('Encriptado','Ha sido encriptado con exito','success');
      }            
}

function desencriptar(){   
    var entrada = document.querySelector("#entrada").value;     
    if(entrada == ""){
        Swal.fire('Error','El campo no puede estar vacio','error');
        document.getElementById("contenedor-codificado").style.display = "block";
        textodiv(estado);
    }else if (entrada.match(mayus) != entrada.match(mayus)){
        Swal.fire('Error','No es valido el uso de mayusculas','error');
        document.getElementById("contenedor-codificado").style.display = "block";
        textodiv(estado);
    }else if (entrada.match(caracteres) != entrada.match(caracteres)){
        Swal.fire('Error','No es valido el uso de caracteres especiales','error');
        document.getElementById("contenedor-codificado").style.display = "block";
        textodiv(estado);
      }else{
        mensajedesencriptado = entrada.replace(/ai/g, "a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u"); 
        document.getElementById("titulo-resultado").innerHTML="Texto desencriptado!";
        document.getElementById("resultado").innerHTML=mensajedesencriptado;
        document.getElementById("entrada").value = "";
        textodiv(!estado);
        Swal.fire('Desencriptado','Ha sido desencriptado con exito','success');
      }            
}

function copiarPortapapeles(){
    var copiado = document.getElementById("resultado");
    copiado.select();
    document.execCommand('copy'); 
    Swal.fire('Error','El campo no puede estar vacio','error'); 
}
 
    boton.onclick = encriptar;
    boton2.onclick = desencriptar;