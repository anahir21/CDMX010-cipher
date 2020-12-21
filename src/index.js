import cipher from './cipher.js';
console.log(cipher);



//los métodos addevent.listener y document.getelementbyid jalan los valores del html
//los valores de la función para cifrar quedarían así
document.getElementById("btn-cifrar").addEventListener ("click", function(){
let texto = document.getElementById("texto1").value;
let desplazamiento = document.getElementById("desplazamiento").value;
let offset= parseInt(desplazamiento);
document.getElementById("texto2").innerHTML = cipher.encode(offset, texto);
});
//las valores (letiables) se estarían tomando de esta manera
document.getElementById("btn-descifrar").addEventListener ("click", function(){
let texto = document.getElementById("texto1").value;
let desplazamiento = document.getElementById("desplazamiento").value;
let offset= parseInt(desplazamiento);
document.getElementById("texto2").innerHTML = cipher.decode(offset, texto);
});
document.getElementById("welcome").addEventListener("click");