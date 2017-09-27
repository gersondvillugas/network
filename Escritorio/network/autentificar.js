//cargamos el package express y creamos nuestra app
var express = require('express');
var app = express();
var path = require('path');
//enviamos nuestro archivo index.html al usuario como página de inicio
app.get('/', function(req, res){
 res.sendFile(path.join(__dirname + '/index.html'));
});
//iniciamos el servidor
app.listen(1337);
console.log('¡1337 es un puerto maravilloso!');
//creamos las rutas para la parte de admin
 
//instanciamos router
var adminRouter = express.Router();
 
//página principal del admin, panel de administración/dashboard (http://localhost:1337/admin)
adminRouter.get('/', function(req, res) {
 res.send('¡Soy el panel de administración!');
});
 //middleware para validar :name
adminRouter.param('name', function(req, res, next, name){
 
 //mostramos en consola para saber si funciona
if(name==='gerson'){
 console.log('usuario correcto ' + name);
 
}
else {
 name='usuario incorrecto'
 console.log('usuario incorrecto');
}
 //una vez hecha la validación guardamos el nuevo objeto en la petición
 req.name = name;
 //pasamos al siguiente asunto
 next();
});
 

adminRouter.get('/hello/:name', function(req, res){
 res.send('hola ' + req.name + '!');
});



adminRouter.get('/posts', function(req, res) { 
 res.send('¡Muestro todos los posts!');
});
 
//aplicamos las rutas a nuestra aplicación, app
app.use('/admin', adminRouter);
//middleware que nos dirá qué ocurre en cada petición
adminRouter.use(function(req, res, next){
 
 //registra cada petición en la consola
 console.log(req.method, req.url);

 
 //continúamos haciendo lo que sea que estábamos haciendo y vamos a la ruta
 next();
});



