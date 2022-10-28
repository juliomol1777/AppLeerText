const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

//conexión con la base de datos
const {connection} = require("../config.db");

const getApi = (request, response) => {
    connection.query("SELECT * FROM probar_relatos", 
    (error, results) => {
        if(error)
            throw error;
        let result = results[0]
        response.status(200).json(result);
        //console.log(result)
    });
};

//ruta
app.route("/api")
.get(getApi);

/*
const postApi = (request, response) => {
    const {plato, descripcion, precio, disponible} = request.body;
    connection.query("INSERT INTO carta(plato, descripcion, precio, disponible) VALUES (?,?,?,?) ", 
    [plato, descripcion, precio, disponible],
    (error, results) => {
        if(error)
            throw error;
        response.status(201).json({"Item añadido correctamente": results.affectedRows});
    });
};

//ruta
app.route("/api")
.post(postApi);


const delApi = (request, response) => {
    const id = request.params.id;
    connection.query("Delete from carta where id = ?", 
    [id],
    (error, results) => {
        if(error)
            throw error;
        response.status(201).json({"Item eliminado":results.affectedRows});
    });
};

//ruta
app.route("/api/:id")
.delete(delApi);
*/

module.exports = app;