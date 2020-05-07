"use strict";

function captcha(){
    let numerorandom = Math.floor((Math.random()*1000)+1);
    let valorcaptcha = document.getElementById("captcha");
    valorcaptcha.value = numerorandom;
}

captcha();

function validar(){
    event.preventDefault()
    let captchaUsuario = document.getElementById("captchaUsuario").value;
    let valorrandom = document.getElementById("captcha").value;
        if (captchaUsuario == valorrandom) {
            let formularioenviado = document.getElementById("formularioenviado");
            formularioenviado.classList.add("mostrar");
            formularioenviado.innerHTML = "El formulario ha sido enviado correctamente.";
            setTimeout(function(){
                document.getElementById('formularioenviado').classList.remove("mostrar");
            }, 3000);
            return false;
            }
        else{
            formularioenviado.classList.add("mostrar");
            formularioenviado.innerHTML = "El código ingresado es incorrecto.";
            setTimeout(function(){
                document.getElementById('formularioenviado').classList.remove("mostrar");
            }, 3000);
            return false;
        
            }

}

let boton = document.getElementById("enviar");
boton.addEventListener("click", validar);





