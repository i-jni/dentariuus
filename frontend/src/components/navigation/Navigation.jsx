import { useContext, useState } from 'react';
import { UserContext } from "../../context/UserProvider";
                                                                                  
import styles from './navigation.module.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const { user, setUser } = useContext(UserContext);
    console.log(user, "user ?");

  const [isNavActive, setIsNavActive] = useState(false);

  const handleNavToggle = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <header className={styles.siteHeader}>
      <div className={`${styles.wrapper} ${styles.siteHeaderWrapper}`}>
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

          </div>
          <ul className={`${styles.navWrapper} ${isNavActive ? styles.active : ''}`}>
            <li className={styles.navItem}>
            <li><Link to="/">Home</Link></li>
            </li>
            <li className={styles.navItem}>
            <Link to={`/students/${user?.id}`}> Profile</Link>
            </li>
            <li className={styles.navItem}>
            <Link to={`/setting/${user?.id}`}>My Setting User</Link>
            </li>
            <li className={`${styles.navItem} ${styles.auth}`}>
            <Link to="/courses">Courses</Link>
            </li>
            <li className={`${styles.navItem} ${styles.auth}`}>
            <Link to="/addcourse">Ajout Cours</Link>
            </li>
            <li className={`${styles.navItem} ${styles.auth}`}><Link to="/editcourse">Edit Cours</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
