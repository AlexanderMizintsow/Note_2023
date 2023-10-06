import { useState } from 'react'
import Button from '../Button/Button'
import style from './Note.module.css'

const CreateNote = ({ handleCreateNote }) => {
  const [text, setText] = useState('')
  const countSymbol = 0
  const handleChange = (event) => setText(event.target.value)
  const saveNote = () => {
    handleCreateNote(text)
    setText('')
  }

  return (
    <>
      <div className={style.note_create}>
        <textarea
          onChange={handleChange}
          value={text}
          rows="9"
          cols="10"
          placeholder="Новый..."
        ></textarea>
        <div className={style.note_footer}>
          <span>{countSymbol + text.length}</span>
          <Button className={style.save} text="Сохранить" onClick={saveNote} />
        </div>
      </div>
    </>
  )
}

export default CreateNote
