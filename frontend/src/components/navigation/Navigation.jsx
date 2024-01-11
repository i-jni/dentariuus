import { useContext, useState } from 'react';
import { UserContext } from "../../context/UserProvider";
import styles from './navigation.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import TopicListe from '../TopicCourseListe/TopicListe';
import { IoMdArrowDropdown } from "react-icons/io";
const Navigation = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [isNavActive, setIsNavActive] = useState(false);
  const [isTopicsVisible, setIsTopicsVisible] = useState(false);

  const handleNavToggle = () => {
    setIsNavActive(!isNavActive);
  };
  const isMobile = () => {
    return window.innerWidth <= 768;
  };
  const handleMouseEnter = () => {
      setIsTopicsVisible(true);
  };

  const handleMouseLeave = () => {
      setIsTopicsVisible(false);
    
  };

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    setUser(null);
    navigate('/login')
  }

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
            <li className={`${styles.navItem} ${styles.dropdown}`}
            onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            onClick={handleMouseEnter}>
          Topics <IoMdArrowDropdown />
          <div className={styles.topicListContainer}>
          {isTopicsVisible && <TopicListe onHide={false} />}
          </div>
          </li>
             {
              user ? <button className="btn red" onClick={handleLogout}>
              Déconnexion </button> :
                <button className="btn green"><Link to="/login">Connexion</Link></button> 
            }
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
