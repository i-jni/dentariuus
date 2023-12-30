// TextMedia.jsx


import SignInCta from '../buttons/SigninCta';
import styles from './TextMedia.module.scss';

const TextMedia = () => {
  return (
    <section className={styles.boxTextMedia}>
      <div className={styles.media}>
        <div>
          <p>image</p>
        </div>
      </div>

      <div className={styles.text}>
        <h3>titre</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatem rem praesentium corrupti
          consequuntur doloribus at provident recusandae exercitationem error ducimus cum neque et blanditiis repellat
          ut inventore voluptatum, perspiciatis, sunt reiciendis fugiat eligendi consectetur magni maiores?
        </p>
        <SignInCta text="Custom textmedia" reversecolor={false}/>
      </div>
    </section>
  );
};

export default TextMedia;
