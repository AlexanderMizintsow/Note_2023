import { IoTrashBinOutline } from 'react-icons/io5'
import style from './Note.module.css'

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <>
      <div className={style.note}>
        <p>{text}</p>
        <div className={style.note_footer}>
          <small>{date}</small>
          <IoTrashBinOutline
            onClick={() => handleDeleteNote(id)}
            className={style.note_icon}
            size={20}
            title="Удалить заметку"
          />
        </div>
      </div>
    </>
  )
}

export default Note
