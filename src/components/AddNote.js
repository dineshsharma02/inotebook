import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const { addNote } = context;
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({
      title: "",
      description: "",
      tag: "",
    });
    props.showAlert("Note Added","success")
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <br/>
      <h2>Add your notes here</h2>
      <div className="container my-3 ">
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              onChange={onChange}
              value={note.title}
              aria-describedby="emailHelp"
              placeholder="Enter note Title here!"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={note.description}
              onChange={onChange}
              placeholder="Enter note description here!"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="tag">Tag</label>
            <input
              type="text"
              className="form-control"
              id="tag"
              value={note.tag}
              name="tag"
              onChange={onChange}
              placeholder="Enter note tag here!"
              required
            />
          </div>
          <br/>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
            disabled={(note.title.length<3 || note.description.length<5 || note.tag.length===0) && "true"}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNote;
