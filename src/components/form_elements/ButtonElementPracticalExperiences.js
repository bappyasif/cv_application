import React from 'react'

export let ButtonElementPracticalExperiences = (props) => {
    return (
        props.isEdit ?
        <button type="submit">submit</button>
        :
        <button onClick={props.invokeEdit}>Edit</button>
    )
}
