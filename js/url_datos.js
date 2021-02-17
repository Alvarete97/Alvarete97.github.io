

var url = localStorage.getItem('url');
//console.log(url);

function cargar_datos(){
	if (typeof(Storage) !== "undefined") {
		document.getElementById("nombre_pj").innerHTML  =  url;
		console.log(url + " -> dentro del iframe");
	}else{
		console.log("valor no definido dentro del iframe");
	}

}



