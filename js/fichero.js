

function datos_pj(id,name,age,nation,gender,perso,main,desing){
	this.id = id;
	this.name = name;
	this.age = age;
	this.nation = nation;
	this.gender = gender;
	this.perso = perso;
	this.main = main;
	this.desing = desing;
	console.log(this.name);
}

var pj_1 = new datos_pj(
	"Pj_Agua_1",
	'Kit',
	17,
	'Agua',
	'Masculino',
	'Introvertido,amable y sensible, pero con una confianza en sí mismo que no duda en demostrar cuando la ocasión lo necesita',
	'Un chico del elemento agua, que utiliza sus conocimientos sobre ella para invocar a dos zorros acompañantes y fortalecer su capacidad ofensiva',
	'Basado en el mito del kitsune, emplea los colores azules para además de vincularlo con el agua, para expresar su serenidad,acompañando a su conjunto blanco y negro, expresa simpleza y pureza. Es el más joven de los aventureros de esta historia. Su actitud amable y pura que no dudará en cambiar si necesita salvar a quienes le importan'
	);

var pj_2 = new datos_pj(
	"Pj_Agua_2",
	"Kawa y Umi",
	14,
	"Agua",
	" ",
	"Traviesos y juguetones",
	"Dos zorros de agua invocados por Kit en su niñez que le acompañan y ayudan a lo largo de sus aventuras",
	"Para fortalecer el diseño basado en el mito del kitsune de su acompañante y creador, estas dos criaturas buscan representar agua tomando forma, con ello se emplean gamas de azules y verdes que representarán los reflejos de su entorno,  y conservar mayormente trasparencias"
	);


var pj_3 = new datos_pj(
	"Pj_Aire_1",
	"Orrin",
	24,
	"Aire",
	"Masculino",
	"Arrogante y altivo, pero de buen  corazón",
	"Un joven de elemento aire, con una gran convicción por sus creencias,de familia de clase alta busca superar la reputación familiar y seguir enalteciendo el legado familiar",
	"Basado en el signo zodiacal Tauro, busca representar ambición y caballerosidad, a la \"antigua\", inspirado por la paleta de \"El orgullo\" de Heller adornado con elementos cristalinos que representen la esencia del aire con el lujo de los elementos en oro"
	);

var pj_4 = new datos_pj(
	"Pj_Aire_2",
	"Aisa",
	18,
	"Aire",
	"Femenino",
	"Traviesa, altiva y rencorosa",
	"",
	""
	);

var pj_5 = new datos_pj(
	"Pj_Fuego_1",
	"Nina",
	22,
	"Fuego",
	"Femenino",
	"Decidida y valiente, no teme hacerse valer cuando algo no le parece correcto",
	"Una joven de elemento fuego, marginada por su condición de nacimiento y tras vivir en las sombras de su ciudad natal, cambia su nombre y decide entrar al culto de Lilith para empezar una nueva vida, un culto consagrado a la figura femenina en el que busca por fin poder ser reconocida como lo que siempre fue",
	"Basada en el concepto de Lilth y su condición como primer esposa bíblica, "
	);


var pj_6 = new datos_pj(
	"Pj_Roca_1",
	"Abis",
	17,
	"Roca",
	"Masculino",
	"",
	"",
	""
	);


var pj_7 = new datos_pj(
	"Pj_Roca_2",
	"Onix",
	18,
	"Roca",
	"Masculino",
	"",
	"",
	""
	);


var pj_8 = new datos_pj(
	"Pj_Planta_1",
	"",
	21,
	"Natura",
	"Femenino",
	"",
	"",
	""
	);


var pj_9 = new datos_pj(
	"Pj_Planta_2",
	"",
	24,
	"Natura",
	"Masculino",
	"",
	"",
	""
	);


var pj_10 = new datos_pj(
	"Pj_Neutro_1",
	"Volra'a",
	23,
	"Desconocida",
	"Masculino",
	"",
	"",
	""
	);


var pj_11 = new datos_pj(
	"Pj_Neutro_2",
	"Sae'li",
	"Desconocida",
	"Desconocida",
	"Femenino",
	"",
	"",
	""
	);



var listaPjs = [pj_1,pj_2,pj_3,pj_4,pj_5,pj_6,pj_7,pj_8,pj_9,pj_10,pj_11];

function lista(){

	return listaPjs;
}