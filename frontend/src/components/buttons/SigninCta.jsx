// SignInCta.jsx


import PropTypes from 'prop-types';
import styles from './signinCta.module.scss';

const SignInCta = ({ text, reversecolor }) => {
  const btnClass = `${styles['cta-hover']} ${styles['bluecta']}`;
  const containerClass = `${styles['cta-subscribe']} ${reversecolor ? styles['reverse-color'] : ''}`;

  return (
    <div className={containerClass}>
      <button className={btnClass} type="button">
        {text}
      </button>
    </div>
  );
};


export default SignInCta;