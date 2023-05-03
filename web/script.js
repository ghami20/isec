window.addEventListener('load', function() {

  let lista =  JSON.parse(localStorage.getItem("lista"));
  console.log(lista);

   lista.forEach(element => {
      let elementos = document.getElementById("Elementos");
      let div = document.createElement("div");
      div.innerHTML = element.nombre +" " + element.apellido;
      div.className += "Midiv";
      elementos.appendChild(div);

      
   });
});
   
   
const agregarElemento = () => {

   var name = document.getElementById("nombre").value;
   var lastname = document.getElementById("apellido").value; 
   console.log(name);
if(name.length>0 ){

   var ingreso = {nombre: name , apellido: lastname};
   
   
   console.log(ingreso);
   let lista =  JSON.parse(localStorage.getItem("lista"));
   lista.push(ingreso);
   console.log(lista);
   localStorage.setItem("lista",JSON.stringify(lista));
   
   window.location. reload();
}else{

   alert("El nombre no contiene nada");
}

}
const eliminarElemento = () => {

   var name = document.getElementById("nombre").value;
   let lista =  JSON.parse(localStorage.getItem("lista"));
   if(name.length>0 ){
      var flag = 0;
      lista.forEach(element => {
         console.log(element.nombre);

         if(element.nombre==name){
            delete(lista[lista.indexOf(element)])
            console.log(lista);
            alert("Elemento eliminado");
            flag=1;
          
         }
      });
   
   }
   localStorage.setItem("lista",JSON.stringify(lista));
   location. reload();
}
