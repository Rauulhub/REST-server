require('./config/config'); //llama config

const express = require('express') //llama express
const app = express() //asigna express a app
var bodyParser = require('body-parser') //llama body parser para post
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) //body parse 

// parse application/json
app.use(bodyParser.json()) //lee json

app.get('/usuario', function(req, res) {
        res.json('Hello World')
    }) //localhost:3000/usuario manda hello world (GET)
app.post('/usuario', function(req, res) {
        let body = req.body;
        if (body.nombre === undefined) {
            res.status(400).json({
                ok: false,
                mensaje: 'El nombre es necesario'
            }); //manda error si no ingresa nombre
        } else {

            res.json({
                persona: body
            });
        } //imprime lo ingresado
    }) //localhost:3000/usuario manda lo puesto en body(POST)
app.put('/usuario/:id', function(req, res) {

        let id = req.params.id;
        res.json({
            id
        })
    }) // imprime el ID puesto en localhost:3000/usuario/id manda imprime id (PUT)
app.delete('/usuario', function(req, res) {
        res.json('delete usuario')
    }) //localhost:3000/usuario manda delete usuario (DELETe)
app.listen(3000, () => {
    console.log('escuchando puerto', 3000);
})