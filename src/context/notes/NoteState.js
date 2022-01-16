import NoteContext from "./noteContext";
import {  useState } from "react";

const NoteState = (props) => {
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);
  const host = "http://localhost:5000/";

  const getNotes = async () => {
    //api call
    const response = await fetch(`${host}api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json)
  };

  
  //add a note
  const addNote = async(title, description, tag) => {

    const response = await fetch(`${host}api/notes/addnote`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },

      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const note = await response.json();
    setNotes(notes.concat(note));
    

    
    
  };
  // //delete a note
  const deleteNote = async(id) => {
    console.log("Deleting note of id = " + id);
    const response = await fetch(`${host}api/notes/deletenote/${id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },

    });
    const json = await response.json();
    console.log(json);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    props.showAlert("Note deleted","warning")
    setNotes(newNotes);
  };
  // Edit a note
  const editNote = async (id, title, description, tag) => {
    //api call
    const response = await fetch(`${host}api/notes/updatenote/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
      
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });


    const json = await response.json();
    console.log(json);
    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    props.showAlert("Note Updated","success")
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote,getNotes,editNote}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
