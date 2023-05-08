window.addEventListener('load', function() {

   let list =  [{
      nombre:"Gamaliel",
      apellido:"Quiroz"

   },{
      nombre:"Elias",
      apellido:"Contreras"

   },{
      nombre:"Giuliano",
      apellido:"Contreras"

   }];

   localStorage.setItem("lista",JSON.stringify(list));




  let lista =  JSON.parse(localStorage.getItem("lista"));
  console.log(lista);

   lista.forEach(element => {
      let id= lista.indexOf(element);
      console.log(id);
      let elementos = document.getElementById("Elementos");
      let div = document.createElement("Button");
      div.innerHTML = element.nombre +" " + element.apellido;
      div.className += "Midiv";
      div.addEventListener("click", cambiarcolor, false);
      elementos.appendChild(div);

      
   });
});


const cambiarcolor=(e)=>{
    console.log(e.target.className);
    let elementos = document.getElementById("Elementos");
    
    elementos.removeChild(e.target);
}
   
   
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
if(name.length>0 ){

   let lista =  JSON.parse(localStorage.getItem("lista"));
   lista.forEach(element => {
      if(element.name==name){
         delete(lista[lista.indexOf(element)])
      }
      alert("Elemento eliminado");
      window.location. reload();
      return;
   });
  


}else{

   alert("no se encontró");
}

}
