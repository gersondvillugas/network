var sumaAsync = (a,b) => {
	return new Promise((resolve,reject) => {
		setTimeout(()=> {
			//verificamos que ambos argumentos sean numeros
			if(typeof a === 'number' && typeof b === 'number'){
				// en caso se cumpla entonces resolvemos la promesa
				resolve(a+b);
			}else {
				// caso contrario rechazamos la promesa con un mensaje
				reject('Los argumentos deben ser numeros');
			}
		},1500);
	})
}

module.exports ={

sumaAsync
};



sumaAsync(7,10)
	.then((res) => {
		console.log('Result: ', res )
		return sumaAsync(res,20);
	})
	.then((res) => {
		console.log('Should be 25: ', res )
	})
	.catch((errorMessage) => {
		console.log('Error: ', errorMessage )
});
