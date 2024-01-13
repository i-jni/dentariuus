import { useContext, useState } from 'react';
import { UserContext } from "../../context/UserProvider";
import styles from './navigation.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import TopicListe from '../TopicCourseListe/TopicListe';
import { IoMdArrowDropdown } from "react-icons/io";
import { MdLogout } from "react-icons/md";
const Navigation = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [isNavActive, setIsNavActive] = useState(false);
  const [isTopicsVisible, setIsTopicsVisible] = useState(false);

  const handleNavToggle = () => {
    setIsNavActive(!isNavActive);
  };
  // const isMobile = () => {
  //   return window.innerWidth <= 768;
  // };
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
        <a href="/" className={styles.brand}>
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
              <Link to="/liste"> Tous les cours</Link>
            </li>
            <li className={`${styles.navItem} ${styles.dropdown}`}
            onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            onClick={handleMouseEnter}>
          Matières <IoMdArrowDropdown />
          <div className={styles.topicListContainer}>
          {isTopicsVisible && <TopicListe onHide={false} />}
          </div>
          </li>
            {
              user &&
              <li className={styles.navItem}>
                <Link to={`/students/${user?.id}`}><img src="/images/illustrations/icon-user.png" alt="" /></Link>
              </li>}

            <li className={`${styles.navItem} ${styles.auth}`}>
              <Link to="/addcourse"><button className='btn darkblue'>+</button></Link>
            </li>
       
            <li className={styles.navItem}>
              <Link to= '/search'> <i className="fa fa-search" ></i></Link>
            </li>
          
             {
              user ? <button className="btn beige" onClick={handleLogout}>
             <MdLogout /></button> :
                <Link to="/login"><button className="btn green">Connexion</button> </Link>
            }
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
