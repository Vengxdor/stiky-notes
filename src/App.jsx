import React, { useEffect, useState } from 'react'
import './App.css'
import { NoteCreator } from './components/noteCreator'
import { getRandomColor } from './Colors'
import { Notes } from './components/Notes'


function App() {
	const [stickyNote, setStickyNote] = useState([])
	
	const handleNoteCreate = (text) =>{
		const color = getRandomColor()
		const newNote = {text, color}
		const updateNotes = [...stickyNote, newNote]
		
		setStickyNote(updateNotes)
		localStorage.setItem('notes', JSON.stringify(updateNotes))
	}

	
	useEffect(() =>{
		const storageNotes = localStorage.getItem('notes')
		if(storageNotes){

			const parsedNotes = JSON.parse(storageNotes)
			setStickyNote(parsedNotes)
		}
	},[])
	
	return(
		<>
			<h1 className='title'>Sticky <span className='title-notes'>Notes</span></h1>
			
			<main className='main'>
				<NoteCreator onStickyCreate={handleNoteCreate}/>

				<Notes setStickyNote={setStickyNote} stickyNote={stickyNote}/>

			</main>
		</>
	)
}

export default App
