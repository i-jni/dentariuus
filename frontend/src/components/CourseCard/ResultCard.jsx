import styles from './CourseCard.module.scss';
import { Link } from 'react-router-dom';
import { TitleH2, TitleH3 } from '../../atomes/titles/Titles';




const ResultCard = ({ course }) => {

    return (     
        <section className='cardes'>
        <div className={styles.containerCards}>
          
            
                    <div key={course.id} className={styles.itemCard}>
                        <div className={styles.img}></div>
                        <div className='centered'>
                            <TitleH3 h3={course.course_name} />
                            <p>
                            {course.content}
                            </p>
                            <Link to={`/course_detail/${course.id}`}><button className="btn darkblue">Voir plus</button></Link>
                        </div>
                    </div>     
            </div>
            </section>  
    
  );
};

export default ResultCard;