//cargamos el package express y creamos nuestra app
var express = require('express');
var app = express();
var path = require('path');
let fs = require('fs');
//enviamos nuestro archivo index.html al usuario como página de inicio
app.get('/', function(req, res){
 res.sendFile(path.join(__dirname + '/index.txt'));
});
fs.readFile('index.txt', 'utf-8', (err, data) => {
  if(err) {
    console.log('error: ', err);
  } else {
    console.log(data);
  }
});

let archivo = fs.readFileSync('index.txt', 'utf-8');
//console.log(archivo);
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
var mayuscula=archivo.toUpperCase();
console.log(mayuscula);

function encriptar( ){
      var encripta = [];
   for( i=0; i<mayuscula.length;i++){
    if(mayuscula[i]=='A'){ encripta[i]='4';
   console.log(mayuscula[i]);}
   
   if(mayuscula[i]=='E'){encripta[i]='3' ;}
   if(mayuscula[i]=='I'){ encripta[i]='1'; }
  if(mayuscula[i]=='O'){  encripta[i]='2' ;} 
   if(mayuscula[i]=='U'){  encripta[i]='5' ;}
   if(mayuscula[i]!='E' && mayuscula[i]!='I' && mayuscula[i]!='O' && mayuscula[i]!='U'
   && mayuscula[i]!='A') {  encripta[i]=mayuscula[i];  }  
 }
   
   console.log(encripta); 
 return encripta;
 }

var encripta =encriptar();
console.log(encripta);



fs.writeFile("./test.txt", encripta, function (err) {
    // la funcion es la que maneja lo que sucede despues de termine el evento
    if (err) {
        return console.log(err);
    }
    // las funciones de javascript en nodejs son asincronicas
    // por lo tanto lo que se quiera hacer debe hacerse dentro de la funcion que maneja el evento
    // si uno declara una variable arriba de la funcion, la manipula dentro y la quiere usar
    // despues afuera, se corre el riezgo de que nunca se realice la manipulacion.
    console.log("The file was saved!");
});
app.get('/encriptar', function(req, res){
 res.sendFile(path.join(__dirname + '/test.txt'));
});


