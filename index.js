const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('./models/Persona');

mongoose.connect('mongodb://rsaldivar:password9@ds129823.mlab.com:29823/g2-mongoose');

const app = express();

app.use(bodyParser.json());

// require('./routes/personasRoutes')(app);
const personasRoutes = require('./routes/personasRoutes');
personasRoutes(app);

app.listen(5000);