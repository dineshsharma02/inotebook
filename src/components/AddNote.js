import React,{useContext,useState} from 'react'
import noteContext from '../context/notes/noteContext'


const AddNote = () => {

    const context = useContext(noteContext)
    const [note, setNote] = useState({title:"",description:"",tag:"general"})
    const {addNote} = context;
    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag)
    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]: e.target.value})
    }
    return (
        <>
        <h2>Add your notes here</h2>
        <div className='container my-3'>
            

            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name='title' onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email"/>
                        
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" name="description" onChange={onChange} placeholder="Enter note description here!"/>
                </div>
                
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>
        </div>
        </>
    )
}

export default AddNote
