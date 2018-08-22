var usuario="";
var passwd="";
$("#enviar").click(function(){
    usuario=$("[type='text']").val();
    passwd=$("[type='password']").val();
    console.log(usuario);
    console.log(passwd);
})