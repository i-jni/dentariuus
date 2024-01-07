import { useContext, useState } from 'react';
import { UserContext } from "../../context/UserProvider";
import styles from './navigation.module.scss';
import { Link } from 'react-router-dom';
import TopicListe from '../TopicCourseListe/TopicListe';
import { IoMdArrowDropdown } from "react-icons/io";
const Navigation = () => {
  const { user } = useContext(UserContext);
  const [isNavActive, setIsNavActive] = useState(false);
  const [isTopicsVisible, setIsTopicsVisible] = useState(false);

  const handleNavToggle = () => {
    setIsNavActive(!isNavActive);
  };

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      setIsTopicsVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setIsTopicsVisible(true);
    }
  };

  return (
    <header className={styles.siteHeader}>
      <div className={`${styles.wrapper}`}>
        <a href="#" className={styles.brand}>
          Dentarius
        </a>
        <nav className={styles.nav}>
          <div
            className={`${styles.navToggle} ${isNavActive ? styles.active : ''}`}
            aria-expanded={isNavActive ? 'true' : 'false'}
            type="button"
            onClick={handleNavToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul
            className={`${styles.navWrapper} ${isNavActive ? styles.active : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <li className={styles.navItem}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link to={`/students/${user?.id}`}>Profile</Link>
            </li>
            <li className={styles.navItem}>
              {/* <Link to={`/setting/${user?.id}`}>My Setting User</Link> */}
            </li>
            <li className={`${styles.navItem} ${styles.auth}`}>
              <Link to="/liste">Courses</Link>
            </li>
            <li className={`${styles.navItem} ${styles.auth}`}>
              <Link to="/addcourse">Ajout Cours</Link>
            </li>
            <li className={`${styles.navItem} ${styles.auth}`}>
              <Link to="/editcourse">Edit Cours</Link>
            </li>
            <li className={`${styles.navItem} ${styles.dropdown}`}>
              Topics <IoMdArrowDropdown />
              {isTopicsVisible && <TopicListe onHide={false} />}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
