import Button from '../Button'
import pic from './illustration-working.svg'
import './hero.module.css'

const Hero = () => {
    return(
        <section>
            <div>
                <h2>More than just shorter links</h2>
                <p>BUild your brand's recognition and get detailed insights on how links are performing.</p>
                <Button text='Get started'/>
            </div>
            <div>
                <img src={pic} alt=""></img>
            </div>
        </section>
    )
}

export default Hero