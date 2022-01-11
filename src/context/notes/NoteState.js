
import NoteContext from './noteContext'
import { useState } from 'react/cjs/react.development'

const NoteState = (props)=>{
    const s1 = {
        "name":"Dinesh",
        "class":"12"
    }
    const [state, setState] = useState(s1)
    const update=()=>{
        setTimeout(() => {
            setState({
                "name":"Rahul",
                "class":"5",
            })
        }, 1000);
    }
    return (
        <NoteContext.Provider value = {{state,update}}>
            {props.children}
        </NoteContext.Provider>

    )
}

export default NoteState;