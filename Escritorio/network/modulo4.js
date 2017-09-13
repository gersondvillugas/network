var test=require('./modulo2');
var edad3=test.edad2;
var edad4=[0,0,0];
var menor=0;

console.log(edad3);
function eliminar(){
    menor=edad3[0];
  for( i=1;i<edad3.length;i++){
    if(edad3[i]<menor)
    { menor=edad3[i];}
       
   }
   var c=0;
  for( i=0;i<edad3.length;i++){
    if(edad3[i]!=menor)
    { edad4[c]=edad3[i];
           c=c+1;}

 }
    
}
eliminar();
console.log('eliminamos la menor');
console.log(edad4);
module.exports ={

  edad4
};

