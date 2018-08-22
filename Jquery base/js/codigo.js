/*sentecias javascript
var caja=document.querySelector("#caja");
caja.addEventListener("click",cambiarColor);
function cambiarColor(){
    caja.style.background="red";    
}
*/
//acciones en jquery

//$reemplaza la declaracion de var
$("#caja").click(function(){
                 $("#caja").css({"background":"green","width":"300px"});  });