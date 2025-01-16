//!from section 4
const fs = require('fs')

const getNotes = () => {
   return "your notes..."
}

const addNote =(title, body) => {
   const Notes = loadNotes()

   const duplicateNote = Notes.find((note) => note.title === title)


   if (!duplicateNote) {
      Notes.push({
         title: title,
         body: body
      })
   
      saveNotes(Notes)
      console.log('note added')
   } else {
      console.log("Title of note taken")
   }
   

}

const removeNote = (title) => {
   const Notes = loadNotes()

   const notesToKeep = Notes.filter((note) => note.title !== title)
   
   if (Notes.length > notesToKeep.length) {
      console.log("note removed")
      saveNotes(notesToKeep)
   } else {
      console.log('note not found')
   }
  
}

const listNotes = () => {
   const Notes = loadNotes()
   console.log('your notes')

   Notes.forEach((note) => {
      console.log(note.title)
   })

}

const readNotes = (title) => {
   const Notes = loadNotes()

   
   const duplicateNote = Notes.find((note) => note.title === title)

   if (duplicateNote) {
      console.log(duplicateNote.body)
   } else {
      console.log("title not found, check your spelling")
   }


}



const loadNotes = () => {
   try{
      const databuffer = fs.readFileSync('notes.json')
      const dataJson = databuffer.toString()
      return JSON.parse(dataJson)
   } catch (e) {
      return []
   }

}


const saveNotes = (Notes) => {
   const dataJsonz=JSON.stringify(Notes)
      fs.writeFileSync('Notes.json',dataJsonz)

}

module.exports = {
   getNotes: getNotes,
   addNote: addNote,
   removeNote: removeNote,
   listNotes: listNotes,
   readNotes: readNotes
}

