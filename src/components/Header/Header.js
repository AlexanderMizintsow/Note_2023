import React from 'react'
import { BsFillMoonFill, BsSun } from 'react-icons/bs'
import style from './Header.module.css'

const Header = ({ handleblackBackground, blackBackground }) => {
  return (
    <div className={style.header}>
      <h1>Мои заметки</h1>
      {blackBackground ? (
        <BsSun
          onClick={() => handleblackBackground(!blackBackground)}
          className={style.toogle_sun}
          size={50}
        />
      ) : (
        <BsFillMoonFill
          onClick={() => handleblackBackground(!blackBackground)}
          className={style.toogle_moon}
          size={50}
        />
      )}
    </div>
  )
}

export default Header
