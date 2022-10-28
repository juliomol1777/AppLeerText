const express = require("express");
const app = express();

//nos ayuda a analizar el cuerpo de la solicitud POST
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//middleware para error en consola del navegador type opaque y problemas con cors al querer ver la 
// response del servidor usando fetch en index.html
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});


//cargamos el archivo de rutas
app.use(require('./routes/api'));

app.listen(process.env.PORT||3300,() => {
    console.log("Servidor corriendo en el puerto 3300");
});

module.exports = app;