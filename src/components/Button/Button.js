import style from './Button.module.css'

const Button = ({ text, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className={style.btn} type="button">
        {text}
      </button>
    </div>
  )
}

export default Button
