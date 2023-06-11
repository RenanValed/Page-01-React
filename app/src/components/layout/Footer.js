import styles from './Footer.module.css'
import {FaFacebook, FaFacebookF, FaGithub, FaInstagram} from 'react-icons/fa'

function Footer(){
    return <footer className={styles.rodape}>
        <ul className={styles.socialList}>
            <li><FaFacebookF/></li>
            <li><FaInstagram/></li>
            <li><FaGithub/></li>
        </ul>
        <h3>Created by @Renanvaled</h3>
        </footer>
}

export default Footer