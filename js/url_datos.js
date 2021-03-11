


var url = localStorage.getItem('url');
//console.log(url);


let requestURL = '../json/personajes.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function() {
	const pjText = request.response;
	const pj = JSON.parse(pjText);
	cargar_datos(pj);
	
}




function cargar_datos(jsonObj){
	if (typeof(Storage) !== "undefined") {
		document.getElementById("nombre_pj").innerHTML = jsonObj[url].name;



		document.getElementById("nombre_pj").innerHTML  =  url;
		console.log(url + " -> dentro del iframe");


		
	}else{
		console.log("valor no definido dentro del iframe");
	}

}



/*
function cargar_datos(){
	if (typeof(Storage) !== "undefined") {
		document.getElementById("nombre_pj").innerHTML  =  url;
		console.log(url + " -> dentro del iframe");
	}else{
		console.log("valor no definido dentro del iframe");
	}

}
*/


