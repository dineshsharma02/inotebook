import React,{ useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext)
  const { deleteNote } = context
  const { note ,updateNote} = props;
  return (
    <div className="col-md-4 my-2">
      
      

      <div className="card">
        <div className="card-header bg-secondary">{note.tag.toUpperCase()} <span>
          <i className="fas fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
          <i className="fas fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i></span></div>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">
          {note.description} 
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
