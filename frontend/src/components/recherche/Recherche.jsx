import style from './recherche.module.scss'; 

const Recherche = () => {
  return (
    <section className={style.searchBox}>
      <h1>Cherchez parmis tout les cours existants:</h1>

      <form>
        <input type="text" placeholder="Recherche..."/>
        <button type="submit">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    </section>
  );
};

export default Recherche;
