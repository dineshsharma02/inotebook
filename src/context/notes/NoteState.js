
import NoteContext from './noteContext' 
import { useContext,useState } from 'react'

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "61dc574922dhfb751b4adac6b7a9",
          "user": "61d7529b69dd86885093c7ca",
          "title": "My title",
          "description": "please wake up",
          "tag": "personal",
          "date": "2022-01-10T15:56:57.474Z",
          "__v": 0
        },
        {
          "_id": "61dc574a2275fghntr1b4adac6b7ad",
          "user": "61d7529b69dd86885093c7ca",
          "title": "My title",
          "description": "please wake up",
          "tag": "personal",
          "date": "2022-01-10T15:56:58.121Z",
          "__v": 0
        },
        {
          "_id": "61dc574a2gfh2751b4adac6b7ad",
          "user": "61d7529b69dd86885093c7ca",
          "title": "My title",
          "description": "please wake up",
          "tag": "personal",
          "date": "2022-01-10T15:56:58.121Z",
          "__v": 0
        },
        {
          "_id": "61dc576bf784a22751b4adac6b7ad",
          "user": "61d7529b69dd86885093c7ca",
          "title": "My title",
          "description": "please wake up",
          "tag": "personal",
          "date": "2022-01-10T15:56:58.121Z",
          "__v": 0
        },
        {
          "_id": "61dc574a254t2751b4adac6b7ad",
          "user": "61d7529b69dd86885093c7ca",
          "title": "My title",
          "description": "please wake up",
          "tag": "personal",
          "date": "2022-01-10T15:56:58.121Z",
          "__v": 0
        },
        {
          "_id": "61dc57674a22751b4adac6b7ad",
          "user": "61d7529b69dd86885093c7ca",
          "title": "My title",
          "description": "please wake up",
          "tag": "personal",
          "date": "2022-01-10T15:56:58.121Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)
      //add a note
      const addNote=(title,description,tag)=>{
        let note = {
          "_id": "61dc57674a227ghn51b4adac6b7ad",
          "user": "61d7529b69dd86885093c7ca",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2022-01-10T15:56:58.121Z",
          "__v": 0
        }
        setNotes(notes.concat(note))
      }
      // //delete a note
      const deleteNote=(id)=>{
        console.log("Deleting note of id = "+id);
        const newNotes = notes.filter((note)=>{ return note._id!==id })
        setNotes(newNotes)
      }
      // // Edit a note
      // const editNote=()=>{
        
      // }

    
    return (
        <NoteContext.Provider value = {{notes,addNote,deleteNote}}>
            {props.children}
        </NoteContext.Provider>

    )
}

export default NoteState;