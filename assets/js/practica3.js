let btnNombre=document.getElementById("btnNombre");
let hNombre=document.getElementById("hNombre");


const guardarNombre=()=>{
    let nombre=prompt("Ingrese su nombre: ");
    if (nombre==="") {
        alert("favor escribir su nombre antes de aceptar");
    } else {
         hNombre.innerHTML="Hola: "+nombre;
    }
   
}

btnNombre.onclick=function () {
    guardarNombre();
}