
const { Schema, model } = require ('db_tfg');

const Pj_Schema = new Schema({

	nombre: {type: String, required: true},
	nacion: {type: String, required: true},
	edad: {type: Number, required: false},
	personalidad: {type: String, required: false},
	genero: {type: Number, required: true},
	descripcion: {type: String, required: true},
	diseno: {type: String, required: true},
	urlpj: {type:String, required: true},
	urli: {type:String, required: true},
	urlicopj: {type:String, required: true}
})

module.exports = model('Personaje', Pj_Schema);

const Esc_Schema = new Schema({

	nombre: {type: String, required: true},
	nacion: {type: String, required: true},
	localizacion: {type: String, required: false},
	clima: {type: String, required: false},
	descripcion: {type: String, required: true},
	diseno: {type: String, required: true},
	urlesc: {type:String, required: true},
	urli: {type:String, required: true},
	urlicoesc: {type:String, required: true}
})

module.exports = model('Escenario', Esc_Schema);