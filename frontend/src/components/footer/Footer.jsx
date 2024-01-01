
import styles from './footer.module.scss';
import { RiTwitterXFill} from "react-icons/ri";
import { FaInstagram, FaFacebookF  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footerCol}>
            <h4>Dentarius</h4>
            <ul>
              <li><a href="#">A propos</a></li>
              <li><a href="#">Politique de confidentialité</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Informations</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Mentions legales</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Liens pratiques</h4>
            <ul>
              <li><a href="#">inscription</a></li>
              <li><a href="#">Connexion</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Suivez-nous</h4>
            <div className={styles.socialLinks}>
              <a href="#"><i><RiTwitterXFill/></i></a>
              <a href="#"><i><FaInstagram/></i></a>
              <a href="#"><i><FaFacebookF/></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
