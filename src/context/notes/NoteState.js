import NoteContext from "./noteContext";
import { useContext, useState } from "react";

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
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkNzUyOWI2OWRkODY4ODUwOTNjN2NhIn0sImlhdCI6MTY0MTU3MTU0M30.zqrEZ6nbXvoFUqkyU3tdxSqUoMo4tnvnbNg8bHh0-Mg",
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
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkNzUyOWI2OWRkODY4ODUwOTNjN2NhIn0sImlhdCI6MTY0MTU3MTU0M30.zqrEZ6nbXvoFUqkyU3tdxSqUoMo4tnvnbNg8bHh0-Mg",
      },

      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });

    

    let note = {
      // _id: "61dc57674a227ghn51b4adac6b7ad",
      // user: "61d7529b69dd86885093c7ca",
      title: title,
      description: description,
      tag: tag,
      date: `${Date.now()}`,
      __v: 0,
    };
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
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkNzUyOWI2OWRkODY4ODUwOTNjN2NhIn0sImlhdCI6MTY0MTU3MTU0M30.zqrEZ6nbXvoFUqkyU3tdxSqUoMo4tnvnbNg8bHh0-Mg",
      },

    });
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
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
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkNzUyOWI2OWRkODY4ODUwOTNjN2NhIn0sImlhdCI6MTY0MTU3MTU0M30.zqrEZ6nbXvoFUqkyU3tdxSqUoMo4tnvnbNg8bHh0-Mg",
      },

      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });

    // const json = await response.json();
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
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote,getNotes,editNote}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
