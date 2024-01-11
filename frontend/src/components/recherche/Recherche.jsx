import { useState } from 'react';
import style from './recherche.module.scss'; 
import Resultats from './Resultats';
import { GrPowerReset } from "react-icons/gr";

const Recherche = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${apiUrl}/courses/search/${searchTerm}`
    );
    const data = await response.json();
    setResults(data.data);
  };

  return (
    <>
    <section className={style.searchBox}>
      <h1>Cherchez parmis tout les cours existants:</h1>

      <form>
        <input
          type="text"
          placeholder="Recherche..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>
          <i className="fa fa-search" aria-hidden="true"></i>
          </button>
          <button className={style.reset}> <GrPowerReset /></button>
        </form>
      </section>
        <Resultats results={results} />
      </>
  );
};

export default Recherche;
