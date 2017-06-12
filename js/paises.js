var telefono=document.getElementById("telefono");
console.log(telefono);
telefono.addEventListener("change",validaTelefono);
function validaTelefono(){
var valor=  telefono.value;
  if( !(/^\+\d{2,3}\d{10}$/.test(valor)) ) {
    swal(
    'Oops...',
    'Ingresa 10 digitos despues del +51!!!',
    'error'
  )
  }else{
    var botondesabilitado=document.getElementById("validando");
    botondesabilitado.classList.remove("disabled");
  }

};
