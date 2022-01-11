import React from 'react'
import { useContext,useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {
    const a = useContext(noteContext)
    useEffect(() => {
        a.update();
        // eslint-disable-next-line
        
    }, [])
    return (
        <div>
            <div>
            This is about page. created by {a.state.name} in class {a.state.class} 
        </div>
        </div>
    )
}

export default About
