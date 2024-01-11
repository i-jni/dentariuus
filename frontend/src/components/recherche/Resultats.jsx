import { TitleH2 } from '../../atomes/titles/Titles';
import ResultCard from '../CourseCard/ResultCard';

const Resultats = ({ results }) => {
  return (
    <>
      {results != null && results.length > 0 && (
        <>
          <TitleH2 h2='Resultat(s) de recherche:'/>
          <div className='flexcard'>
            {results.map((result) => (
              <ResultCard key={result.id} course={result} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Resultats;
