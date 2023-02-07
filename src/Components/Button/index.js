import './button.css'

const Button = (props) => {
    return (
    <button className='btn-component'>{props.text}</button>
    )
}

export default Button