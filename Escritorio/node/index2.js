const yargs = require('yargs')
const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes2');

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
	.command('remove', 'Borra una nota', {
      	title: titleOptions
  	})
	.command('removeall', 'Borra todas las notas', {
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
    notes.removeNote(argv.title);
    
	console.log(`La nota '${argv.title}' ha sido borrada.`);
	
} else if (command === "removeall") {
	console.log(command);
	notes.removeAll();
	console.log(`Todas las notas han sido borradas`);

}else{
	console.log("C mamut");
}
