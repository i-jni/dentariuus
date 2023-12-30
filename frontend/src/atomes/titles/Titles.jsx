
import styles from './titles.module.scss';

export const TitleH1 = ({ h1 }) => (
    <>
      {h1 && <h1 className={`${styles.heading1} centered`}>{h1}</h1>}
    </>
  );
  
  export const TitleH2 = ({ h2 }) => (
    <>
      {h2 && <h2 className={`${styles.heading2} centered`}>{h2}</h2>}
    </>
  );
  
  export const TitleH3 = ({ h3 }) => (
    <>
      {h3 && <h3 className={`${styles.heading3} centered`}>{h3}</h3>}
    </>
  );
  
  export const TitleH4 = ({ h4 }) => (
    <>
      {h4 && <h4 className={`${styles.heading4} centered`}>{h4}</h4>}
    </>
  );
  