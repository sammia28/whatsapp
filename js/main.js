window.addEventListener("load",function() {
    var inputMensaje = document.getElementById("mensajes");
    inputMensaje.addEventListener("keydown", function(){
        if (window.event.keyCode == 13) {
            mensajesEnviados();
        }
    });	
 
    function mensajesEnviados(){
        var conversacion = document.getElementById("conversacion");
        var mensajeEnviado= document.createElement("div");
        mensajeEnviado.classList.add("w-message", "w-message-out");
        var mensajeEnviadoDiv = document.createElement("div");
        mensajeEnviadoDiv.classList.add("w-message-text");
        var parrafo = document.createElement("p");
        
//         hora
        var horaPublicada = new Date ();
        var hora = horaPublicada.getHours();
        var minuto = horaPublicada.getMinutes();
        var horaActual= hora + ":"+ minuto;
        var time = document.createElement("div");
        time.classList.add("time");
        time.innerHTML = horaActual;
        
//        uniendo hijos
        conversacion.appendChild(mensajeEnviado);
        mensajeEnviado.appendChild(mensajeEnviadoDiv);
        mensajeEnviadoDiv.appendChild(parrafo);
        mensajeEnviadoDiv.appendChild(time);
        
        parrafo.innerHTML = inputMensaje.value;
        inputMensaje.value = "";
    }    
});


