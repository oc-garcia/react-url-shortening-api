import style from './Statistics.module.css'

const Statistics = () => {
    return (
<section className={style.statisticsContainer}>
    <h3>Advanced Statistics</h3>
    <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
    <div>
        <div className={style.cardContainer}>
            <img src="./icon-brand-recognition.svg" alt="Brand Recognition"/>
            <h4>Brand Recognition</h4>
            <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
        </div>
        <div className={style.dash}></div>
        <div className={style.cardContainer}>
            <img src="./icon-detailed-records.svg" alt="Detailed Records"/>
            <h4>Detailed Records</h4>
            <p>Gaind insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
        </div>
        <div className={style.dash}></div>
        <div className={style.cardContainer}>
            <img src="" alt=""/>
            <h4>Fully Customizable</h4>
            <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
        </div>
    </div>
</section>
    )
}

export default Statistics