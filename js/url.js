

/*Localiza el identificador de fragmento que se proporciona
de la anterior página en la url*/

var valor_url = window.location.hash;
console.log(valor_url);
valor_url = valor_url.slice(1);
valor_urli = valor_url.slice(3,-2);
localStorage.setItem("url", valor_url);

function cargar(){
	if (typeof(Storage) !== "undefined") {
		document.getElementById('url_pj').src  = "../imagenes/personajes/" + valor_url + ".png";
		document.getElementById('urli_pj').src  = "../imagenes/iconos/" + valor_urli + ".png";
		document.getElementById('iframe_datos').src  = "datos_pj.html#" + valor_url;
		console.log(valor_url + " -> fuera del iframe");
		console.log(valor_urli + " -> fuera del iframe");
	}else{
		console.log("valor no definido fuera del iframe");
	}

}



//iframe_datos