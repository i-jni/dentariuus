// import { useEffect } from 'react';
// // import anime from 'animejs/lib/anime.esm.min.js';
// import styles from './joinUs.module.scss';

// const JoinUs = () => {
//   useEffect(() => {
//     // Background Animation
//     let tl = anime.timeline({
//       easing: 'easeOutExpo',
//       duration: 850
//     });

//     tl.add({
//       targets: `.${styles.item}`,
//       width: '100%',
//       backgroundColor: styles.main,
//       delay: anime.stagger(100)
//     });

//     tl.add({
//       targets: `.${styles.item}`,
//       delay: anime.stagger(70),
//       width: '97%',
//       backgroundColor: styles.light
//     });

//     tl.add({
//       targets: `.${styles.item}`,
//       backgroundColor: styles.white,
//       delay: anime.stagger(50, { from: 'center' })
//     });

//     tl.add(
//       {
//         targets: `.${styles.text}`,
//         top: '49%',
//         duration: 4500,
//         opacity: 1
//       },
//       '-=1000'
//     );

//     // Text Animation
//     var textWrapper = document.querySelector(`.${styles.effect1}`);
//     textWrapper.innerHTML = textWrapper.textContent.replace(/([^.\s]|\w)/g, "<span class='${styles.letter}'>$&</span>");

//     anime.timeline().add({
//       targets: `.${styles.effect1} .${styles.letter}`,
//       scale: [5, 1],
//       opacity: [0, 1],
//       translateZ: 0,
//       easing: 'easeOutExpo',
//       duration: 1350,
//       delay: function (el, i) {
//         return 70 * i;
//       }
//     }, 1500);
//   }, []);

//   return (
//     <div>
//       <div className={styles.container}>
//         <h1 className={styles.effect1}>hello there, welcome!</h1>
//         <p className={styles.text}>nice to meet you ☺</p>
//       </div>

//       <section>
//         {[...Array(10)].map((_, index) => (
//           <div key={index} className={styles.item}></div>
//         ))}
//       </section>

//       <footer>
//         <p>By.Goodkatz | Free to use </p>
//         <a href="/">Learn more</a>
//       </footer>
//     </div>
//   );
// };

// export default JoinUs;
