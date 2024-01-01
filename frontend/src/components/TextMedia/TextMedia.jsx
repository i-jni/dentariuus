import SignInCta from '../buttons/SigninCta';
import styles from './TextMedia.module.scss';

const TextMedia = ({ reverse, image, title, text, ctaText, reversecolorCta }) => {
  const containerStyles = reverse ? `${styles.boxTextMedia} ${styles.reverse}` : styles.boxTextMedia;

  return (
    <section className={containerStyles}>
      <div className={styles.media}>
        <img src={image} alt="image" className={styles.image} />
      </div>

      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{text}</p>
        <SignInCta text={ctaText} reversecolorCta={reversecolorCta} />
      </div>
    </section>
  );
};

export default TextMedia;
