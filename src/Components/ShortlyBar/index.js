import './shortlybar.css'
import Button from "../Button";

const ShortlyBar = () => {
    return (
        <>
        <section className="shortly-container">
            <input type="text" placeholder='Shorten a link here...'/>
            <Button text="Shorten it!"/>
        </section>
        </>
    )
}

export default ShortlyBar