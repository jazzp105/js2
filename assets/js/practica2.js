let btnNombre=document.getElementById("btnNombre");
let hNombre=document.getElementById("hNombre");
const guardarNombre=()=>{
    let nombre=prompt("Ingrese su nombre: ");
    hNombre.innerHTML="Hola: "+nombre;
}

btnNombre.onclick=function name() {
    guardarNombre();
}