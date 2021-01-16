
//Recogiendo los datos

	?????????????????????????

//Transcribiendo datos
var personaje_db = db.get(url.split());
var pj = JSON.parse(personaje_db);

//Transfiriendo los datos a pantalla
document.getElementsById("nombre_pj").innerHTML = pj.nombre_pj();
document.getElementsById("edad_pj").innerHTML = pj.edad_pj();
document.getElementsById("nacion_pj").innerHTML = pj.nacion_pj();
document.getElementsById("genero_pj").innerHTML = pj.genero_pj();
document.getElementsById("person_pj").innerHTML = pj.perso_pj();
document.getElementsById("cuerpo_pj").innerHTML = pj.cuerpo_pj();
document.getElementsById("diseno_pj").innerHTML = pj.diseno_pj();
