const yargs = require('yargs')
const noteUtilities = require('./notes')

yargs.version('17.7.2')

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        noteUtilities.addNote(argv.title, argv)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        noteUtilities.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler: () => {
        noteUtilities.ListNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'read the note',
    handler: () => {
        console.log("Reading notes")
    }
})

//! VERY IMPORTANT TO HAVE THIS CONSOLE LOG
yargs.parse()