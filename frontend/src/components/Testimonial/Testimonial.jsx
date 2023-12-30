
import styles from './Testimonial.module.scss';
import image1 from '../../../public/images/testimonial/dentarius1.jpg'
import image2 from '../../../public/images/testimonial/dentarius2.jpg'
import image4 from '../../../public/images/testimonial/dentarius4.jpg'


const Testimonial = () => {
  const testimonials = [
    {
      quote: "Dentarius, un essentiel pour le partage et l'apprentissage. Un site incontournable dans ma scolarité! En effet, Cela me facilite mes études ",
      author: { name: 'Malik Steve', role: 'Etudiant' },
      image: image1,
    },
    {
      quote: "Le partage, clé chez Dentarius. Ce site dynamique facilite l'échange de connaissances, rendant l'apprentissage passionnant!",
      author: { name: 'Rose Mantic ', role: 'Etudiante' },
      image: image2,
    },
    {
      quote: "Dentarius rend l'experience captivante. Une plateforme indispensable pour partager des connaissances en toute simplicité. ",
      author: { name: 'Eleanor Hawa', role: 'Etudiante' },
      image: image4,
    },
  ];

  return (
      <div className={styles.testimonial}>
      {testimonials.map((testimonial, index) => (
        <figure className={styles.testinonyCard} key={index}>
          <blockquote>{testimonial.quote}</blockquote>
          <div className={styles.author}>
            <img src={testimonial.image} alt="Author Avatar" />
            <h5>{testimonial.author.name} <span>{testimonial.author.role}</span></h5>
          </div>
        </figure>
      ))}
    </div>
  );
};

export default Testimonial;
