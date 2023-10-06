import { useState, useEffect } from 'react'
import uuid from 'react-uuid'
import Search from './components/Search/Search'
import Header from './components/Header/Header'
import NotesList from './components/Note/NotesList'

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) || [
      {
        id: uuid(),
        text: 'Ваши заметки!',
        date: '05/10/2023',
      },
    ]
  )

  const [searchText, setSearchText] = useState('')
  const [blackBackground, setblackBackground] = useState(false)

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const createNote = (text) => {
    if (text) {
      const newNote = {
        id: uuid(),
        text,
        date: new Date().toLocaleDateString(),
      }
      const newNotes = [...notes, newNote]
      setNotes(newNotes)
    }
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div
      className={`container ${
        blackBackground ? 'black_background' : 'color_background'
      }`}
    >
      <Header
        handleblackBackground={setblackBackground}
        blackBackground={blackBackground}
      />
      <Search handleSearchText={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleCreateNote={createNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  )
}

export default App
