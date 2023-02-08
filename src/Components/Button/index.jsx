import style from './Button.module.css'


const Button = (props) => {
    return (
    <button className={style.btnComponent}>{props.text}</button>
    )
}

export default Button