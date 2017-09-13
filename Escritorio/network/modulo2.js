//const fs=require('fs');
var test=require('./modulo1');
//let file='archivo.txt';
const data='hola mundo';
test.ingresar();
var nota2=test.nota;
var char=['a','b' ,'c' , 'd', 'e','f' ,'g', 'h','i','j' ,'k','l','m' ,'n' ,'ñ','o' ,'p','q' ,'r' , 's','t','u','v','w','x' ,'y' ,'z'];

function validar( ){
for (i = 0; i < nota2.length; i++){
 for (j = 0; j < char.length; j++)
  if(nota2[i]===char[j])
  { console.log('ingresamos otra nota');
  nota2[i] =Math.round(Math.random()*20);

   } 

   
 }
}
validar();

module.exports ={

  nota2
};

