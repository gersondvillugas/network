var test=require('./modulo4');
var nota5=test.nota4;
var http=require("http");


var a=0;

function promedio(){

  for( i=0;i<nota5.length;i++){
   
    a=a+nota5[i];
  }
  a=a/nota5.length;

}

promedio();
console.log('promedio');
console.log(a);
var manejador =function(solicitud,respuesta){

console.log("recibimos una peticion");
respuesta.end("las mayores notas   son   y promedio " +   nota5 +' '  + a);
};
var servidor=http.createServer(manejador);
servidor.listen(8080);
