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

// following points to remember while publishing the reactjs website using github
//     1. run 'npm install gh-pages'
//     2. push all your code in git repository
        // 3. finally run 'npm run deploy'