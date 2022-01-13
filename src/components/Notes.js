import React from "react";
import { useContext, useEffect ,useRef} from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";

import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const onChange=()=>{


  }
  const handleClick=()=>{

  }
  const updateNote=(note)=>{
    ref.current.click()
  }
  const ref = useRef(null)
  const { notes, addNote, getNotes } = context;
  useEffect(() => {
    getNotes();
  }, []);
  return (
    <>
      <AddNote />

      <div className="row m-3">
        <h2>Your Notes</h2>
        <button
          
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
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
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save Note
                </button>
              </div>
            </div>
          </div>
        </div>
        {notes.map((note) => {
          return <Noteitem key={note._id} note={note} updateNote={updateNote} />;
        })}
      </div>
    </>
  );
};

export default Notes;
