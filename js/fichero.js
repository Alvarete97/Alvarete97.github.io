

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
	"De familia dedicada a los asuntos del orden y gobierno de la ciudad, es de pequeña introducida en una academia del Las tejedoras, una institución conocida por su tinte agresivo. Estas condiciones le dan unas características más agresivas que al resto de protagonistas.Fue elegida tras graduarse 'cum laude' en la academia y la influencia familiar, se embarca en un viaje que dará un vuelco a su vida",
	"El diseño muy inspirado en la cultura griega y en el mito de las tejedoras, su gama de colores busca por una parte representar con el dorado la alta cuna social de la que proviene en contraste con el blanco típico de las cultura de Aether, que busca verse como la nación mas ejemplar, esto además sirve como juego de purea contrarrestando su retorcida mente."
	);

var pj_5 = new datos_pj(
	"Pj_Fuego_1",
	"Nina",
	22,
	"Fuego",
	"Femenino",
	"Decidida y valiente, no teme hacerse valer cuando algo no le parece correcto",
	"Una joven de elemento fuego, marginada por su condición de nacimiento y tras vivir en las sombras de su ciudad natal, cambia su nombre y decide entrar al culto de Lilith para empezar una nueva vida, un culto consagrado a la figura femenina en el que busca por fin poder ser reconocida como lo que siempre fue",
	"Basada en el concepto de Lilth y su condición como primer esposa bíblica, busca expresar un diseño de novia, pero en colores inspirados en rescollos de una hogera"
	);


var pj_6 = new datos_pj(
	"Pj_Roca_1",
	"Abis",
	17,
	"Roca",
	"Masculino",
	"Aventurero y charlatan, resulta ser el alma de la fiesta en cada reunión. Es el rebelde de los dos",
	"Criados desde pequeños en las duras condiciones de los nómadas del desierto, ambos hermanos crecen juntos colaborando en el comercio familiar. Es en la visita a una ciudad y conocer a su regidor que les ofrece un trato para establecer su comercio en la ciudad, eto hace que los pequeños puedan asentarse y estudiar. Con ello se apuntan a los entrenamientos. Años después se embarcan en una aventura que les llevan a encontrarse con el conocimiento de los Cristales, culminando esta aventura con su participación en los juegos de selección de representación",
	"Concebidos como representación de una pequeña de una pequeña sección de los poderes de la roca, El Cristal, y creados y diseñados como un conjunto. Ponen de manifiesto unas ropas humildes y de supervivientes,que reflejen la dura competición que han tenido que sortear para llegar y por último comparten ropajes para fortalecer la concepción de ellos como hermanos"
	);


var pj_7 = new datos_pj(
	"Pj_Roca_2",
	"Onix",
	18,
	"Roca",
	"Masculino",
	"Sereno e introvertido, es la parte calmada de los hermanos ",
	"Criados desde pequeños en las duras condiciones de los nómadas del desierto, ambos hermanos crecen juntos colaborando en el comercio familiar. Es en la visita a una ciudad y conocer a su regidor que les ofrece un trato para establecer su comercio en la ciudad, eto hace que los pequeños puedan asentarse y estudiar. Con ello se apuntan a los entrenamientos. Años después se embarcan en una aventura que les llevan a encontrarse con el conocimiento de los Cristales, culminando esta aventura con su participación en los juegos de selección de representación",
	"Concebidos como representación de una pequeña de una pequeña sección de los poderes de la roca, El Cristal, y creados y diseñados como un conjunto. Ponen de manifiesto unas ropas humildes y de supervivientes,que reflejen la dura competición que han tenido que sortear para llegar y por último comparten ropajes para fortalecer la concepción de ellos como hermanos"
	);


var pj_8 = new datos_pj(
	"Pj_Planta_1",
	"Silva",
	21,
	"Natura",
	"Femenino",
	"Tranquila, amable y risueña",
	"Elegida por su tribu para representarlos logra conquistar el corazón de los habitantes de la capital durante la selección. Gracias a su despliegue del control vegetal, su amabilidad y aprecio por las artes.",
	"De naturaleza optimista, tranquila y relajada, su diseño inspirado en ropas tribales y paleta de tonos verdes y orgánicas que evoquen los colores de los bosques"
	);


var pj_9 = new datos_pj(
	"Pj_Planta_2",
	"Taiyari",
	24,
	"Natura",
	"Masculino",
	"Bonachón, amable y confiado",
	"Amable y carismático, gana el respeto de su tribu gracias a sus altruistas hazañas, su amabilidad y habilidades de comunicación que le lograron tam´bién la victoria en el concurso de selección de representantes",
	"Su diseño se mantiene instiprado en ropas tribales con la inspiracón cromatica de los bosques y sus colores"
	);


var pj_10 = new datos_pj(
	"Pj_Neutro_1",
	"Volra'a",
	23,
	"Desconocida",
	"Masculino",
	"Enigmático y reservado",
	"Vive rodeado de enigmas en torno a su persona, sin parientes cercanos a los que acudir, vive una vida modesta y nómada con una simple frase como método de vida: <i> 'Que el caos sea tu fuerza, y el orden tu camino'</i>",
	" De tonos apagados y poco llamativos, busca un estilo que no destaque con el fin de camuflarse entre todos los sitios que visita. Sus escasas pertenencias familiares son unos brazales y dos armas gemelas, las cuales suele llevar ocultas. Su diseño busca además resaltar la dualidad de inocencia y el peso de la misión que le aguarda. Mantener vivo el legado de toda una nación que poco a poco se ha ido extinguiendo. Sensaciones que remarcan su vestimenta oscura (el peso interior) ocultado por su capa de pureza e inicencia (Capa blanca) que puede usar para 'protegerse' en la multitud y pasar desapercibido."
	);


var pj_11 = new datos_pj(
	"Pj_Neutro_2",
	"Sae'li",
	"Desconocida",
	"Desconocida",
	"Femenino",
	"Pausada y serena",
	"Una criatura mítica que se dice solo se aparece a quien es digno de consagrarse a Dorne",
	"De color puramente blanco busca representar la forma más tangible de la pureza, magestuosa e imponente. Los toques de negro dentro de su cabeza ejemplifican las impurezas adquiridas en su vida pasada y que no supo solventar"
	);



var listaPjs = [pj_1,pj_2,pj_3,pj_4,pj_5,pj_6,pj_7,pj_8,pj_9,pj_10,pj_11];

function lista(){

	return listaPjs;
}