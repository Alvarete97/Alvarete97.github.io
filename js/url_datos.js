

var url = localStorage.getItem('url');
const listaPj = lista();
//console.log(url);



function cargar_datos(){
	if (typeof(Storage) !== "undefined") {

		document.getElementById("nombre_pj").innerHTML  =  listaPj.find(pj => pj.id === url).name;
		document.getElementById("edad_pj").innerHTML  	=  listaPj.find(pj => pj.id === url).age;
		document.getElementById("nacion_pj").innerHTML  =  listaPj.find(pj => pj.id === url).nation;
		document.getElementById("genero_pj").innerHTML  =  listaPj.find(pj => pj.id === url).gender;
		document.getElementById("person_pj").innerHTML  =  listaPj.find(pj => pj.id === url).perso;
		document.getElementById("cuerpo_pj").innerHTML  =  listaPj.find(pj => pj.id === url).main;
		document.getElementById("diseno_pj").innerHTML  =  listaPj.find(pj => pj.id === url).desing;

		//console.log(url + " -> dentro del iframe");


	}else{
		console.log("valor no definido dentro del iframe");
	}

}


