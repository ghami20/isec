
document.addEventListener("DOMContentLoaded",function(){
  document.getElementById("formulario").addEventListener("submit",validarFormulario)
});

var informacion = "gamaliel@Gmail.com";
function validarFormulario(evento){
  evento.preventDefault();
  var usuario = document.getElementById("usuario").value;
  if(usuario.length==0 || usuario.length<6){

      var us= document.getElementById("errorUsuario");
      us.style.display="block";
      alert('El usuario es no cumple con los requisitos minimos');
      return;
  }

  if(usuario != informacion){
    alert('Usuario no existe ');
    return;

  }
  this.submit();

}

