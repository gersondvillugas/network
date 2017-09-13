//const fs=require('fs');
var test=require('./modulo1');
//let file='archivo.txt';
const data='hola mundo';
test.ingresar();
var edad2=test.edad;
var char=['a','b' ,'c' , 'd', 'e','f' ,'g', 'h','i','j' ,'k','l','m' ,'n' ,'ñ','o' ,'p','q' ,'r' , 's','t','u','v','w','x' ,'y' ,'z'];

function validar( ){
for (i = 0; i < edad2.length; i++){
 for (j = 0; j < char.length; j++)
  if(edad2[i]===char[j])
  { console.log('ingresamos otra edad');
  edad2[i] =Math.round(Math.random()*20);

   } 

   
 }
}
validar();

module.exports ={

  edad2
};

