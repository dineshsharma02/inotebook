import React from 'react'
import AlertContext from './alertContext'
import { useState } from 'react'

const AlertState = (props) => {
    const [alert, setAlert] = useState(null)
    const showAlert = (message,type) =>{
        setAlert({
          type:type,
          message:message
        })
        setTimeout(() => {
          setAlert(null)
        }, 1700);
      }
    return (
        <AlertContext.Provider value={showAlert,alert}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState
