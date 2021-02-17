

const num_pj = 10;

/* 
function seleccionado(v){
 localStorage.selected = v;
 document.getElementById("result").innerHTML = "You have clicked: " + localStorage.selected ;
 document.getElementById("asd").href = "personaje_Generico.html#" + localStorage.selected;
	//document.getElementByClassName("a_Iconos").href = "personaje_Generico.html#" + localStorage.selected;
}
*/


function seleccionado(v){
	localStorage.selected = v;
	document.getElementById("result").innerHTML = "You have clicked: " + localStorage.selected ;
	for (var i = 1; i <= num_pj; i++) {
 		document.getElementById("pj"+ i).href = "personaje_Generico.html#" + localStorage.selected;
		console.log(i);
	}
}


 

/*function modificarRango(selector, inicio = 1, final) {
	for (var i = inicio; i <= final; i++) {
		$(selector + ":nth-child(" + i + ")").html('Mi nuevo texto');
	}
}
modificarRango(".caja li", 2, 7);*/

/* Check browser support
if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("selected", "Ninguno");
  // Retrieve
  document.getElementById("result").innerHTML = localStorage.getItem("selected");
} else {
	document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}*/