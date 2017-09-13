var test=require('./modulo2');
var nota3=test.nota2;
var nota4=[0,0,0];
var menor=0;

console.log(nota3);
function eliminar(){
    menor=nota3[0];
  for( i=1;i<nota3.length;i++){
    if(nota3[i]<menor)
    { menor=nota3[i];}
       
   }
   var c=0;
  for( i=0;i<nota3.length;i++){
    if(nota3[i]!=menor)
    { nota4[c]=nota3[i];
           c=c+1;}

 }
    
}
eliminar();
console.log('eliminamos la menor nota');
console.log(nota4);
module.exports ={

  nota4
};

