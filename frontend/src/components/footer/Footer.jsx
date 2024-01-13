
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
              <li><a href="/">A propos</a></li>
              <li><a href="/confidentialite">Politique de confidentialité</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Informations</h4>
            <ul>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/mentions_legales">Mentions legales</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Liens pratiques</h4>
            <ul>
              <li><a href="/register">inscription</a></li>
              <li><a href="/login">Connexion</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Suivez-nous</h4>
            <div className={styles.socialLinks}>
              <a href="/twitter"><i><RiTwitterXFill/></i></a>
              <a href="/instagram"><i><FaInstagram/></i></a>
              <a href="/facebook"><i><FaFacebookF/></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
