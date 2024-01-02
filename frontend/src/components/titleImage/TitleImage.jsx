
import PropTypes from 'prop-types';
import styles from './TitleImage.module.scss';

const TextImage = ({ imageUrl, text }) => (
  <div className={styles.textImageContainer}>
    <img className={styles.image} src={imageUrl} alt="image" />
    <p className={styles.text}>{text}</p>
  </div>
);

TextImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TextImage;
