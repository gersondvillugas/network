console.log("iniciando modulos")

const PI=3.14;
const divide =(num)=>{
 console.log(num/2)
} ;
var edad=[10,12,12,'a'];
function ingresar(){
for (i = 0; i < edad.length; i++){
  console.log('la edad ingresada:' + edad[i]);

}
}
module.exports ={

  edad,
   ingresar
};

