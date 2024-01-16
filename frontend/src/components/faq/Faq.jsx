
import styles from './faq.module.scss'; 


const Faq = () => {
  return (
      <><h2 className={styles.faqheader}>... les plus frequentes</h2>
        <section className={styles.faqsection}>

      

      <div className={styles.faqcontent}>
        <div className={styles.faqquestion}>
          <input id="q1" type="checkbox" className={styles.panel} />
          <div className={styles.plus}>+</div>
          <label htmlFor="q1" className={styles.paneltitle}>Quel est le but de ce site ?</label>
          <div className={styles.panelcontent}>Notre site est un projet collaboratif entre étudiants en medecine dentaire</div>
        </div>
        <div className={styles.faqquestion}>
    <input id="q2" type="checkbox" className={styles.panel} />
    <div className={styles.plus}>+</div>
    <label htmlFor="q2" className={styles.paneltitle}>Est ce gratuit ?</label>
    <div className={styles.panelcontent}>Oui!</div>
                </div>
                
    <div className={styles.faqquestion}>
    <input id="q3" type="checkbox" className={styles.panel} />
    <div className={styles.plus}>+</div>
    <label htmlFor="q3" className={styles.paneltitle}>Comment acceder a l'ensemble du contenu du site?</label>
    <div className={styles.panelcontent}> Pour cela il faut s'inscire si jamais ce n est pas encore fait, vous pouvez le faire <a href='#'>ici</a>  </div>
                   
                </div>
                
                <div className={styles.faqquestion}>
    <input id="q4" type="checkbox" className={styles.panel} />
    <div className={styles.plus}>+</div>
    <label htmlFor="q4" className={styles.paneltitle}>Comment puis-je obtenir de l'aide si j ai des questions sur le contenu du cours?</label>
    <div className={styles.panelcontent}> Nous offrons un support dédié aux étudiants. Vous pouvez poser des questions sur cette addresse: support@dentarius.fr <a href='#'>ici</a>  </div>
                   
                </div>
                <div className={styles.faqquestion}>
    <input id="q5" type="checkbox" className={styles.panel} />
    <div className={styles.plus}>+</div>
    <label htmlFor="q5" className={styles.paneltitle}>Y a-t-il des remises ou des offres spéciales pour les étudiants?</label>
    <div className={styles.panelcontent}> Oui bientôt !  </div>
                   
  </div>

        
      </div>

      </section>
      </>
  );
};

export default Faq;
