// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { UserContext } from "../../context/UserProvider";


// const Navigation = () => {
//     const { user, setUser } = useContext(UserContext);
//     // console.log(user, "user ???");

//     return (
//         <>
//             <nav className="navcontainer">
//                 <ul className="navlist">
//                         <li id="active">Hey, user: {user?.firstname },</li>
//                         <li id="active"><Link to={"/"}>Home</Link></li>
//                         <li id="active"><Link to={`/students/${user?.id}`}>my profile</Link></li>
//                         <li id="active"><Link to={`/setting/${user?.id}`}>my setting user</Link></li>
//                         <li id="active"><Link to={'/courses'}>courses</Link></li>
//                         <li id="active"><Link to={'/addcourse'}>Ajout Cours</Link></li>
//                         <li id="active"><Link to={'/editcourse'}>Edit Cours</Link></li>
//                 </ul>
                
//             </nav>
        
//         </>
//     )
    
// }
// export default Navigation;

// src/App.js

import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from "../../context/UserProvider";
import styles from './navigation.module.scss'; // Assurez-vous du chemin correct

const Navigation = () => {
  const [showNav, setShowNav] = useState(false);
  const { user } = useContext(UserContext);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className={styles.app}>
      <header>
        <div className={styles.logo}>DENTARIUS</div>
        <nav className={showNav ? `${styles['nav-links']} ${styles.show}` : styles['nav-links']}>
          <ul>
            <li>Hey, user: {user?.firstname},</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to={`/students/${user?.id}`}>My Profile</Link></li>
            <li><Link to={`/setting/${user?.id}`}>My Setting User</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/addcourse">Ajout Cours</Link></li>
            <li><Link to="/editcourse">Edit Cours</Link></li>
          </ul>
        </nav>
        <div className={styles.burger} onClick={toggleNav}>X</div>
      </header>
    </div>
  );
};

export default Navigation;
