var reenvioclave= document.getElementById('repetirClave');
console.log(reenvioclave);
reenvioclave.addEventListener("click", claveAleatoria);
function claveAleatoria(){

  var clave =Math.floor(1e2 + (Math.random() * 2e2));
alert ("LAB-"+ clave);
}
claveAleatoria();
