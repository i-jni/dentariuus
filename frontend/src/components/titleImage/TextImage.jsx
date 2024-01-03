
import PropTypes from 'prop-types';
import styles from './TextImage.module.scss';

const TextImage = ({ imageUrl, text }) => (
  <div className={`${styles.textImageContainer} centered`}>
    <p className={styles.text}>{text}</p>
    <img className={styles.image} src={imageUrl} alt="image" />
  </div>
);

TextImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TextImage;
