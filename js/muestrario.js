const items = 7;
const num_pj = 10;

function mostrar(v){

	for (var i = 0; i <= items; i++) {
		
		if(document.getElementById( v + i)){

			if(document.getElementById( v + i).style.display === "inline"){

				document.getElementById( v + i).style.display = "none";

			}else{

				document.getElementById( v + i).style.display = "inline";
			}


		}else{
			console.log("Demasiados numeros");
			//i = items;
		}
	}

}


/*
function seleccionado(w,v){
	localStorage.selected = v;
	document.getElementById(w).href = "personaje_Generico.html#" + localStorage.selected;
}*/
