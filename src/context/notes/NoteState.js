
import NoteContext from './noteContext'
import { useState } from 'react/cjs/react.development'

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "61dc574922751b4adac6b7a9",
          "user": "61d7529b69dd86885093c7ca",
          "title": "My title",
          "description": "please wake up",
          "tag": "personal",
          "date": "2022-01-10T15:56:57.474Z",
          "__v": 0
        },
        {
          "_id": "61dc574a22751b4adac6b7ad",
          "user": "61d7529b69dd86885093c7ca",
          "title": "My title",
          "description": "please wake up",
          "tag": "personal",
          "date": "2022-01-10T15:56:58.121Z",
          "__v": 0
        },
        {
          "_id": "61dc574a22751b4adac6b7ad",
          "user": "61d7529b69dd86885093c7ca",
          "title": "My title",
          "description": "please wake up",
          "tag": "personal",
          "date": "2022-01-10T15:56:58.121Z",
          "__v": 0
        },
        {
          "_id": "61dc574a22751b4adac6b7ad",
          "user": "61d7529b69dd86885093c7ca",
          "title": "My title",
          "description": "please wake up",
          "tag": "personal",
          "date": "2022-01-10T15:56:58.121Z",
          "__v": 0
        },
        {
          "_id": "61dc574a22751b4adac6b7ad",
          "user": "61d7529b69dd86885093c7ca",
          "title": "My title",
          "description": "please wake up",
          "tag": "personal",
          "date": "2022-01-10T15:56:58.121Z",
          "__v": 0
        },
        {
          "_id": "61dc574a22751b4adac6b7ad",
          "user": "61d7529b69dd86885093c7ca",
          "title": "My title",
          "description": "please wake up",
          "tag": "personal",
          "date": "2022-01-10T15:56:58.121Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)

    
    return (
        <NoteContext.Provider value = {{notes}}>
            {props.children}
        </NoteContext.Provider>

    )
}

export default NoteState;