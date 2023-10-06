import Note from './Note'
import CreateNote from './CreateNote'
import style from './Note.module.css'

const NotesList = ({ notes, handleCreateNote, handleDeleteNote }) => {
  return (
    <>
      <div className={style.notesList}>
        {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          />
        ))}
        <CreateNote handleCreateNote={handleCreateNote} />
      </div>
    </>
  )
}

export default NotesList
