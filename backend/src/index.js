/* Importando o Módulo Express */
const express   = require('express');
const mongoose  = require('mongoose');
const cors  = require('cors');
const routes    = require('./routes');
const app       = express();

mongoose.connect('mongodb+srv://<username>:<password>@cluster0-lsi5p.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json()); // Sempre antes das outras rotas;
app.use(routes);
app.listen(3333);
