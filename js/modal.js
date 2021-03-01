var modal;


//Funcion de apertura
function desplegar(v, w){

modal = document.getElementById("myModal");
modal.style.display = "block";

document.getElementById("img01").src = v;
document.getElementById("caption").innerHTML = w;

}


// Funcion de cierre
var span = document.getElementsByClassName("close")[0];
function cerrar_modal() { 

	modal.style.display = "none";
}