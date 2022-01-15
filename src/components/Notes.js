import React from "react";
import { useContext, useEffect ,useRef,useState} from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";

import AddNote from "./AddNote";

const Notes = (props) => {
  const context = useContext(noteContext);
  const ref = useRef(null)
  const refClose = useRef(null)
  
  const { notes, addNote, getNotes ,editNote} = context;
  const [note, setNote] = useState({id:"",etitle:"",edescription:"",etag:"general"})
    const handleClick=(e)=>{
      console.log("updating note",note);
      editNote(note.id,note.etitle,note.edescription,note.etag)
      refClose.current.click()

    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]: e.target.value})
    }
  const updateNote=(currentNote)=>{
    ref.current.click()
    setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
  }
  
  
  useEffect(() => {
    getNotes();
  }, []);
  return (
    <>
      <AddNote showAlert={props.showAlert} />

      <div className="row m-3">
        <h2>Your Notes</h2>
        <button
          
          type="button"
          className="btn btn-primary d-none"
          data-toggle="modal"
          data-target="#exampleModal"
          ref = {ref}
        >
          Launch demo modal
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Update Note
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="etitle">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="etitle"
                      name="etitle"
                      onChange={onChange}
                      aria-describedby=""
                      placeholder="Enter note Title here!"
                      value={note.etitle}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="edescription">Description</label>
                    <input
                      type="text"
                      className="form-control"
                      id="edescription"
                      name="edescription"
                      onChange={onChange}
                      value={note.edescription}
                      placeholder="Enter note description here!"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="etag">Tag</label>
                    <input
                      type="text"
                      className="form-control"
                      id="etag"
                      name="etag"
                      value={note.etag}
                      onChange={onChange}
                      placeholder="Enter note tag here!"
                    />
                  </div>

                  
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  ref = {refClose}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={handleClick}
                disabled={(note.etitle.length<3 || note.edescription.length<5 || note.etag.length==0) && "true"}
                >
                  
                  Update Note
                </button>
              </div>
            </div>
          </div>
        </div>
        {notes.map((note) => {
          return <Noteitem key={note._id} note={note} updateNote={updateNote} showAlert={props.showAlert} />;
        })}
      </div>
    </>
  );
};

export default Notes;
