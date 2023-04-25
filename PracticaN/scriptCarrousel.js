
document.addEventListener("DOMContentLoaded",function(){
  document.getElementById("formulario").addEventListener("submit",MostrarProductos)
});

var informacion = ["producto 1", "producto 2","producto 3"];
function MostrarProductos(evento){
  evento.preventDefault();
  for (let index = 0; index < informacion.length; index++) {
    var node = document.createElement('li');
    node.appendChild(document.createTextNode(informacion[index]));
     
    document.getElementById('ListaProductos').appendChild(node);
    
  }
  return;
/*
  if(usuario.length==0 || usuario.length<6){

      var us= document.getElementById("errorUsuario");
      us.style.display="block";
      alert('El usuario es no cumple con los requisitos minimos');
      return;
  }

  if(usuario != informacion){
    alert('Usuario no existe ');
    return;

  }*/
  this.submit();

}
