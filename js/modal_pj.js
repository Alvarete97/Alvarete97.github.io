var modal_pj;


function desplegar_pj(v, w){

modal_pj = document.getElementById("myModal_pj");
modal_pj.style.display = "block";
document.getElementById("img02").src = v;
document.getElementById("caption_a").href = "personaje_Generico.html#" + w;

}

// Funcion de cierre
var span = document.getElementsByClassName("close")[0];
function cerrar_modal_pj() { 

	modal_pj.style.display = "none";
}