const mongoose = require('mongoose');

const Persona = mongoose.model('personas');

module.exports = (app) => {
	app.get('/', async (req, res) => {
		res.send({ mensaje: 'hola' });
	});

	app.get('/api/personas', async (req, res) => {
		const personas = await Persona.find({});
		res.send(personas);
	});

	app.post('/api/personas', async (req, res) => {
		const { nombre, apellidos, edad, peso, ojos } = req.body;

		const persona = new Persona({
			nombre, apellidos, edad, peso, ojos
		});
		
		const respuesta = await persona.save();
		res.send(respuesta);
	});

};