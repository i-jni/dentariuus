import PropTypes from 'prop-types';
import styles from './shareRs.module.scss'; 

const ShareRs = ({ url, title }) => {
  return (
      <div className={styles.share}>

       <a className={styles.twitter} href={`https://twitter.com/intent/tweet?status=${title}+${url}`} target="_blank" rel='noreferrer'>
        <i className="fa fa-twitter"></i>
      </a>   
      
      <a className={styles.instagram} href={`https://www.instagram.com/?url=${url}`} target="_blank" rel='noreferrer'>
        <i className="fa fa-instagram"></i>
      </a>
          
      <a className={styles.facebook} href={`https://www.facebook.com/share.php?u=${url}&title=${title}`} target="_blank" rel='noreferrer'>
        <i className="fa fa-facebook"></i>
      </a>
  
    </div>
  );
};

ShareRs.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ShareRs;
