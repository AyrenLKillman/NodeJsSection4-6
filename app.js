const yargs = require('yargs')
const notes = require('./notes')

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
    handler: function (argv) {
        console.log("title: " + argv.title)
        console.log('Body: ' + argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    handler: function () {
        console.log("removing note")
    }
})

yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler: function () {
        console.log("listing all notes")
    }
})

yargs.command({
    command: 'read',
    describe: 'read the note',
    handler: function () {
        console.log("Reading notes")
    }
})

//! VERY IMPORTANT TO HAVE THIS CONSOLE LOG
yargs.parse()