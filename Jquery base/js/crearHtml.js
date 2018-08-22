$("#boton3").click(function(){
    //$("#contenedor").html('<div id="salida">adios</div><input type="text">');    
    //agregar contenido uso append
    $("#contenedor").append('<div>esto se agrega despues</div>');
    $("#salida").before('<div>esto se agrega antes</div>');
    $("#salida").after('<div>esto se agrega despues</div>');
    $("#salida").prepend('un nuevo texto');
    $("#salida").text("cualquier cosa");
    
});