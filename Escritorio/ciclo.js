let students = [
  { codigo:'20133',
    name: 'Alvaro',
     apellido:'asade',
      ciclo:'1',
  },
  { codigo:'20131',
    name: 'Daniel',
   apellido: 'canales',
   ciclo:'2',
  },
  { codigo:'20131',
    name: 'Alexys',
    apellido: 'kil',
    ciclo:'3',
  },
  { codigo:'20134',
    name: 'Rafa',
    apellido: 'asd',
    ciclo:'3',
  },
  { codigo:'20135',
    name: 'Alejandro',
    apellido: 'pozo',
    ciclo:'4',
  },
  { codigo:'20135',
    name: 'Sofia',
    apellido: 'jonas',
    ciclo:'4'
  }
]
let ciclo=[
     { ciclo:'1',},
     { ciclo:'2',},
     { ciclo:'3',},
     { ciclo:'4',},
     { ciclo:'5',},
     { ciclo:'6',},
     { ciclo:'7',},
     { ciclo:'8',},
     { ciclo:'9',},
     { ciclo:'10',}
] 
var array = [0, 0, 0,0,0,0,0,0,0,0];

var c1=0
var c2=0
var c3=0
var c4=0

function  list( ) {
 for (j = 0; j < ciclo.length; j++){
                c1=0
  for (i = 0; i < students.length; i++)

     if(students[i].ciclo==ciclo[j].ciclo)
     {   c1=c1+1
         array[j]=c1   }
    
  
} 
}














list();
console.log("alumnos que pertenecen al primer ciclo")
console.log(array[0])
console.log("alumnos que pertenecen al segundo ciclo")
console.log(array[1])
console.log("alumnos que pertenecen al tercer ciclo")
console.log(array[2])
console.log("alumnos que pertenecen al cuarto ciclo")
console.log(array[3])
console.log("alumnos que pertenecen al quinto ciclo")
console.log(array[4])
console.log("alumnos que pertenecen al sexto ciclo")
console.log(array[5])
console.log("alumnos que pertenecen al septimo ciclo")
console.log(array[6])
console.log("alumnos que pertenecen al octavo ciclo")
console.log(array[7])
console.log("alumnos que pertenecen al noveno ciclo")
console.log(array[8])
console.log("alumnos que pertenecen al decima ciclo")
console.log(array[9])


