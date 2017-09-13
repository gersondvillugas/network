var test=require('./modulo4');
var edad5=test.edad4;
var http=require("http");


var a=0;

function promedio(){

  for( i=0;i<edad5.length;i++){
   
    a=a+edad5[i];
  }
  a=a/edad5.length;

}

promedio();
console.log('promedio');
console.log(a);
var manejador =function(solicitud,respuesta){

console.log("recibimos una peticion");
respuesta.end("nos conectamos");
};
var servidor=http.createServer(manejador);
servidor.listen(7070);
