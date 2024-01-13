import styles from './CourseCard.module.scss';
import { Link } from 'react-router-dom';
import {TitleH3 } from '../../atomes/titles/Titles';




const ResultCard = ({ course }) => {
    const limitText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };

    return (     
        <section className='cardes'>
        <div className={styles.containerCards}>
            
                    <div key={course.id} className={`${styles.itemCard} card`}>
                        <div className={styles.img}></div>
                        <div className='centered'>
                        <TitleH3 h3={limitText (course.course_name, 100)}/>
                            <p>
                            {limitText (course.content, 120)}
                            </p>
                            <Link to={`/course_detail/${course.id}`}><button className="btn darkblue">Voir plus</button></Link>
                        </div>
                    </div>     
            </div>
            </section>  
    
  );
};

export default ResultCard;