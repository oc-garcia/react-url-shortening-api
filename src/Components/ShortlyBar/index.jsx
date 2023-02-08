import style from './Shortlybar.module.css'
import Button from "../Button";

const ShortlyBar = () => {
    return (
        <>
        <div  className={style.background}>
            <section className={style.inputContainer}>
                <input type="text" placeholder='Shorten a link here...'/>
                <Button text="Shorten it!"/>
            </section>
        </div>
        </>
    )
}

export default ShortlyBar