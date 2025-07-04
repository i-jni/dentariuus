

import styles from './objectifs.module.scss';
import obj1 from '/images/illustrations/progress.png'
import obj2 from '/images/illustrations/solidaire.png'
import obj3 from '/images/illustrations/diplom.png'
import { TitleH2 } from '../../atomes/titles/Titles';



const Objectifs = () => {
    return (<>
      <TitleH2 h2='Nos Objectifs'/>
      <section className={`${styles.objectifsContainer} centered`}>
          
      <div className={styles.objectifItem}>
        <img src={obj2} alt="Objectif 1" />
        <p>Accroitre la solidarité et  le partage</p>
      </div>
      <div className={styles.objectifItem}>
        <img src={obj1} alt="Objectif 2" />
        <p>Augmenter le savoir et vos notes !</p>
      </div>
      <div className={styles.objectifItem}>
        <img src={obj3} alt="Objectif 3" />
        <p>Assurer la réussite en dentaire</p>
      </div>
      </section>
      </>
  );
};

export default Objectifs;
