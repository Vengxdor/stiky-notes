/* eslint-disable react/prop-types */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export function Notes({stickyNote, setStickyNote}) {

	const deleteNote = (index) =>{
		const updateNotes = [...stickyNote]
		updateNotes.splice(index, 1)
		localStorage.removeItem('notes')
		setStickyNote(updateNotes)

		
	}  

	return(
		<section className='notes'>
			{stickyNote.map((note, index) =>{
				return(
					<div key={index} style={{backgroundColor: note.color}} className='sticky-note'>
						<span className='delete-note'>
							<FontAwesomeIcon onClick={() => deleteNote(index)} icon={faXmark}/>
						</span>
						<p className='note-text'>{note.text}</p>
					</div>
				)
			})}
		</section>
	)
}