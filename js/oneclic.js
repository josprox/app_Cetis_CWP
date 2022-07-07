function MostrarInicio(){
    $.get('./model/vista/home.html', function(mensaje,estado){
        document.getElementById('oneclic').innerHTML=mensaje;
    });
}

function MostrarPerfil(){
    $.get('./model/vista/perfil.html', function(mensaje,estado){
        document.getElementById('oneclic').innerHTML=mensaje;
    });
}