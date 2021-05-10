import React from 'react'

export let ButtonElementEducationalData = (props) => {
    return (
        props.isEdit ?
        <button type="submit">submit</button>
        :
        <button onClick={props.invokeEdit}>Edit</button>
    )
}
