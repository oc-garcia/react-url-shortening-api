import style from './Footer.module.css'
import logo from './logo.svg'
import facebook from './icon-facebook.svg'
import twitter from './icon-twitter.svg'
import pinterest from './icon-pinterest.svg'
import instagram from './icon-instagram.svg'

const Footer = () => {
    return(
        <footer className={style.footerContainer}>
            <img src={logo} alt="Shortly Logo" />
            <ul className={style.list}>
                <li>
                    Features
                    <ul>
                        <li className={style.listItem}>Link Shortening</li>
                        <li className={style.listItem}>Branded Links</li>
                        <li className={style.listItem}>Analytics</li>
                    </ul>
                </li>
                <li>
                    Resources
                    <ul>
                        <li className={style.listItem}>Blog</li>
                        <li className={style.listItem}>Developers</li>
                        <li className={style.listItem}>Support</li>
                    </ul>
                </li>
                 <li>
                    Company
                    <ul>
                        <li className={style.listItem}>About</li>
                        <li className={style.listItem}>Our Team</li>
                        <li className={style.listItem}>Carrers</li>
                        <li className={style.listItem}>Contact</li>
                    </ul>
                </li>
            </ul>
            <div className={style.logoContainer}>
                <a href="/"><img src={facebook} alt='Facebook Logo'/></a>
                <a href="/"><img src={twitter} alt='Twitter Logo'/></a>
                <a href="/"><img src={pinterest} alt='Pinterest Logo'/></a>
                <a href="/"><img src={instagram} alt='Instagram Logo'/></a>
            </div>
        </footer>
    )
}

export default Footer