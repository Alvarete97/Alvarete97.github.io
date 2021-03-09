
const num_pj = 12;

function seleccionado(v){
	localStorage.selected = v;
	/*document.getElementById("result").innerHTML = "You have clicked: " + localStorage.selected ;*/
	for (var i = 1; i <= num_pj; i++) {
 		document.getElementById("pj"+ i).href = "personaje_Generico.html#" + localStorage.selected;
		console.log(i);
	}
}
