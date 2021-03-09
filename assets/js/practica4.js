let btnDatos=document.getElementById("btnDatos");
let hNombre=document.getElementById("hNombre");
let hEdad=document.getElementById("hEdad");
let hDocumento=document.getElementById("hDocumento");
let hTelefono=document.getElementById("hTelefono");


const guardarDatos=()=>{
    let nombre=prompt("Ingrese su nombre: ");
    if (nombre==="") {
        alert("Por favor ingrese todos los datos");
    } else {
         let edad=prompt("Ingrese su edad: ");
         if (edad==="" ){
             alert("Por favor ingrese todos los datos");
         } else {
             let documento=prompt("Ingrese su documento: ");
             if (documento==="") {
                 alert("Por favor ingrese todos los datos");
             } else {
                 let telefono=prompt("Ingrese su telefono: ");
                 if (telefono==="") {
                     alert("Por favor ingrese todos los datos");
                 } else {
                     
                     hTelefono.innerHTML="Telefono:"+telefono;
                     hDocumento.innerHTML="Documento:"+documento;
                     hEdad.innerHTML="Edad:"+edad;
                     hNombre.innerHTML="Nombre:"+nombre;
                 }
                 
             }
             
         }
        
    }
   
}

btnDatos.onclick = function nombre() {
    guardarDatos();
}