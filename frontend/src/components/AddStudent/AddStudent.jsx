import { useState } from "react";
import AllLevels from "../Alllevels/AllLevels";
import Allcountrys from "../Countrys/Countrys";
import { Link, useNavigate } from "react-router-dom";
import { createStudent } from "../../../service/api.jsx";
import styles from './AddStudent.module.scss'
import { TitleH2 } from "../../atomes/titles/Titles.jsx";

const Register = () => {
  const navigate = useNavigate();

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  const handleLevelSelection = (selectedValue) => {
    setSelectedLevel(selectedValue);
  };

  const handleCountrySelection = (selectedValue) => {
    setSelectedCountry(selectedValue);
  };

  const handleAddStudentSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    data.country_id = selectedCountry;
    data.levell_id = selectedLevel;

    try {
      const result = await createStudent(data);
      if (result.success) {
        setSuccessMessage('Compte créé avec succès!');
        navigate(`/students/${result.studentId}`);
      } else {
        setErrorMessage(result.message);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <section className={styles.registerContainer} >
      <TitleH2 h2='Inscription'/>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form method="post" onSubmit={handleAddStudentSubmit}>
        <label>Prénom</label>
        <input type="text" name="firstname" placeholder="Prénom" required />

        <label>Nom de famille</label>
        <input type="text" name="lastname" placeholder="Nom de famille" required />

        <label>E-mail</label>
        <input type="email" name="email" placeholder="E-mail" required />

        <label>Mot de passe</label>
        <input type="password" name="password" placeholder="Mot de passe" required />

        <div>
          <label>Niveau </label>
          <AllLevels displayAsDropdown={true} onSelectLevel={handleLevelSelection} />
        </div>

        <div>
          <label>Pays </label>
          <Allcountrys displayAsDropdown={true} onSelectCountry={handleCountrySelection} />
        </div>

        {/* make default: user, and hide it: */}
        <div>
          <label htmlFor="role">Rôle</label>
          <select name="role">
            <option value="visitor">Visiteur</option>
            <option value="user">Utilisateur</option>
            <option value="admin">Administrateur</option>
          </select>
        </div>

        <button  className="btn green"type="submit">Création</button>
      </form>
      <div>
        <p>Déjà membre ? <Link to="/login">Connexion</Link></p>
      </div>
    </section>
  );
};

export default Register;