// SignInCta.jsx


import { Link } from 'react-router-dom';
import styles from './signinCta.module.scss';

const SignInCta = ({ text, reversecolorCta, linkto }) => {
  const btnClass = `${styles['cta-hover']} ${styles['bluecta']}`;
  const containerClass = `${styles['cta-subscribe']} ${reversecolorCta ? styles['reverse-color'] : ''}`;

  return (
    <div className={containerClass}>
      <Link to={linkto}><button className={btnClass} type="button">
        {text}
      </button></Link>
    </div>
  );
};


export default SignInCta;