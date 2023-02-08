import style from './Boost.module.css'
import Button from '../Button'

const Boost = () => {
    return(
        <section className={style.boostContainer}>
            <h4>Boost your links today</h4>
            <Button text={"Get Started"}/>
        </section>
    )
}

export default Boost