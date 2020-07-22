import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: '',
        content: ''
    })

    const [expand, setexpand] = useState(false)

    const inputEvent = (event) => {
        const {name, value} = event.target
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
     }

    const addEvent = () => {
        props.passNote(note)
        setNote({
            title: '',
            content: ''
        })
    }
    const expandIt = () => {
        setexpand(true)
    }
 
    const bToNormal = () => {
        setexpand(false)
    }

    return(
        <>
        <div className="mainNote"
        onDoubleClick={bToNormal}>
            <form>
            {
            expand ? 
            <input 
            type="text"
            className="demo1"
            placeholder= "Title" 
            autoComplete="off"
            onChange={inputEvent}
            value={note.title}
            name='title' /> : null
            } <br />
            <textarea 
            rows="" 
            cols="" 
            className="demo2"
            placeholder="Enter your task here"
            onChange={inputEvent}
            value = {note.content}
            name='content'
            onClick={expandIt} >
            </textarea>
            {expand ? 
            <Button className="btn"
            onClick={addEvent} >
            <AddIcon />
            </Button> : null
            }
            </form>
        </div>
        </>
    )
}

export default CreateNote