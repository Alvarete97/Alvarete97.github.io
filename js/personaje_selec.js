
//Recogiendo datos
url.split(){
	db.seach("/datos de urls");
}

var db_data = JSON.parse(db.get(url.split())); 

//Transcribiendo los datos
document.getElementsById("urli_pj").src = "../" + db_data.urli_pj();
document.getElementsById("url_pj").src = "../" + db_data.url_pj();

//Enviar los datos
iframe.src = url;

