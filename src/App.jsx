import React, {useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import CreateNote from './CreateNote'
import Note from './Note'

const App = (props) => {
    const [addItem, setaddItem] = useState([])

    const addNote = (noteData) => {
        setaddItem((oldData) => {
            return [...oldData, noteData]
        })
    }

    const onDelete = (id) => {
        setaddItem((checkId) => {
            return checkId.filter((currentData, indx) => {
                return indx !== id
            })
            }
        )
    }

    return(
        <>
        <Header /> <br />
        <CreateNote passNote ={addNote} />
        {addItem.map((val, index) => {
            return(
                <Note 
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem={onDelete} />
            )
        })}
        <Footer />
        </>
    )
}

export default App