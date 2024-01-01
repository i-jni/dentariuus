
import styles from './joinUs.module.scss';

import groupeImg from '../../../public/images/illustrations/groupe.png'
import { TitleH1 } from '../../atomes/titles/Titles'

const JoinUs = () => {

    return (
        <section className={`${styles.joinUsBloc} centered`}>
            <TitleH1 h1='Votre place est avec nous. Rejoignez-nous pour une réussite commune!'/>
            <picture> <img src={groupeImg} alt="groupe etudiants dentarius" /></picture>
        </section>

    )
}

export default JoinUs;
