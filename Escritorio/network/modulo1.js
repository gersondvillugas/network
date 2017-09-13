console.log("iniciando modulos")

const PI=3.14;
const divide =(num)=>{
 console.log(num/2)
} ;
var nota=[10,12,12,'a'];
function ingresar(){
for (i = 0; i < nota.length; i++){
  console.log('la notas ingresada:' + nota[i]);

}
}
module.exports ={

  nota,
   ingresar
};

