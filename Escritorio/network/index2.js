// npm init -> crea el package.json
// sudo npm install nodemon -g -> instala nodemon como global
// npm install lodash --save -> instala lodash para manejo de arrays
// npm install yargs --save -> instala yargs para uso de comandos

const yargs = require('yargs')
const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');
/*
$ nodemon index.js --name="LeGuishe"
>> Bienvenido guishe!
if (argv.name =="LeGuishe") {
  console.log('Bienvenido guishe!');
} else {
  console.log('Ya jalaste guishe (Oswaldo)');
}
*/

// add
// list
// read
// remove

const titleOptions = {
	describe: 'Title of note',
	demand: true,
	alias: 't'
};

const bodyOptions = {
	describe: 'Body of note',
	demand: true,
	alias: 'b'
};

const argv = yargs
	.command('add','Add a new note', {
		title: titleOptions,
		body: bodyOptions
	})
	.command('list','Lists all the notes',{
	})
	.command('read','Read a note',{
		title: titleOptions
	})
           .command('remove','delete all',{ 
                  title: titleOptions
           })
           .command('remove-all','delete all',{ 
           })
	.help()
	.argv;

//console.log(argv);
let command = argv._[0];

if (command === "add") {
	console.log(command);
	notes.addNote(argv.title,argv.body);
} else if (command === "list") {
	console.log(command);
	let allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} notes(s), `);
	allNotes.forEach(note => {
		notes.logNote(note);
	});
} else if (command === "read") {
	console.log(command);
	let test = notes.getNote(argv.title);
	if (test){
		notes.logNote(test);
	}else{
		console.log("No esta pe >:v");
	}
	
} else if (command === "remove") {


	console.log(command);

          notes.removeNotes(argv.title);
         console.log(`se borro  ${argv.title} `);

}
else if (command === "remove-all") {


	console.log(command);

          notes.removeAll(argv.title);
         console.log(`se borroron todas las notas`);

}


else{
	console.log(" No se encuentra el comando ");
}
