import React, { useState} from 'react'

// eslint-disable-next-line react/prop-types
export function NoteCreator({onStickyCreate}){
	const [inpText, setInpText] = useState('')

	

	const handleCreate = (e) =>{
		if(inpText.trim === '') return

		e.preventDefault()
		onStickyCreate(inpText)
		setInpText('')
	}

	


	return(
		<form className='notes-creator'>
			<label htmlFor='notes-input' className='create-note'>

				<input 
					className='notes-input'
					id='notes-input'
					type="text" 
					value={inpText}
					maxLength={155}
					placeholder='Create a sticky note'
					autoComplete='off'
					onChange={(e) => setInpText(e.target.value)}
				/>
				{inpText && <button onClick={handleCreate} type='submit' className='note-btn'>Create</button>}
			</label>
			{inpText.length >= 155 && <span className='max-length'>You reach the max length</span>}
		</form>
	)
}
