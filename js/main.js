window.addEventListener("load",function() {
    var inputMensaje = document.getElementById("mensajes");
    inputMensaje.addEventListener("keydown", function(){
        if (window.event.keyCode == 13) {
            mensajesEnviados();
            horaPublicacion();
        };
    });	
    var conversacion = document.getElementById("conversacion");
    function mensajesEnviados(){
        var enviarMensaje = document.createElement("div");
        enviarMensaje.setAttribute("class", "w-message, w-message-out, w-message-text");
        enviarMensaje.innerHTML = inputMensaje.value;
        conversacion.appendChild(enviarMensaje, conversacion.childNodes[0]);
        document.getElementById("mensajes").value = "";

    }
    function horaPublicacion (){
        var horaActual = new Date ();
        var hora = horaActual.getHours();
        var minuto = horaActual.getMinutes();
        var horaActual = hora + ":"+ minuto;
        var horaContenedor = document.createElement("div");
        horaContenedor.innerHTML = horaActual;
        conversacion.appendChild(horaContenedor, conversacion.childNodes[0]);
    };
});