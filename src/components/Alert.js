import React from 'react'

export default function Alert(props) {
    const cap = (text) =>{
        const captext = text[0].toUpperCase() + text.slice(1)
        return captext
    }
    // let mystyle = {
    //     height:10px,
    // }
    return (
        <div style = {{height:'40px'}}>
            {props.alert && <div>
            <div class={`alert alert-${props.alert.type}`} role="alert">
                {/* <strong>{cap(props.alert.type)}</strong> {props.alert.message} */}
                <strong>{cap(props.alert.type==="danger"?"Error":props.alert.type)}</strong> {props.alert.message}


            </div>
            </div>}
        </div>
    )
}

