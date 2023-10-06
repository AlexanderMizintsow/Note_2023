import React from 'react'
import { TfiSearch } from 'react-icons/tfi'
import style from './Searc.module.css'

const Search = ({ handleSearchText }) => {
  return (
    <div className={style.search}>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        className={style.search_input}
        onChange={(event) => handleSearchText(event.target.value)}
      />
      <TfiSearch className={style.search_icon} size={40} />
    </div>
  )
}

export default Search
