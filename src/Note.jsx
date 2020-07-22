import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note = (props) => {
    const deleteNote = () => {
        props.deleteItem(props.id)
    }
    return (
        <>
        <div className="note">
            <h2 style={{marginBottom:0}}> {props.title} </h2> <br />
            <p> {props.content} </p>
            <button 
            onClick={deleteNote} > <DeleteOutlineIcon /> </button>
        </div>
        </>
    )
}
export default Note