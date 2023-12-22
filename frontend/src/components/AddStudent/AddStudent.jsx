import { useState } from "react";
import Alllevels from "../AllLevels/AllLevels";
import Allcountrys from "../Countrys/Countrys";
import { Link, useNavigate } from "react-router-dom";
import { createStudent } from "../../../service/api.jsx";

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
    <>
      <h2>Inscription</h2>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form method="post" onSubmit={handleAddStudentSubmit}>
        <p>Prénom:</p>
        <input type="text" name="firstname" placeholder="Prénom" required />

        <p>Nom de famille:</p>
        <input type="text" name="lastname" placeholder="Nom de famille" required />

        <p>E-mail:</p>
        <input type="email" name="email" placeholder="E-mail" required />

        <p>Mot de passe:</p>
        <input type="password" name="password" placeholder="Mot de passe" required />

        <div>
          <label>Niveau :</label>
          <Alllevels displayAsDropdown={true} onSelectLevel={handleLevelSelection} />
        </div>

        <div>
          <label>Pays :</label>
          <Allcountrys displayAsDropdown={true} onSelectCountry={handleCountrySelection} />
        </div>

        {/* make default: user, and hide it: */}
        <div>
          <label htmlFor="role">Rôle:</label>
          <select name="role">
            <option value="visitor">Visiteur</option>
            <option value="user">Utilisateur</option>
            <option value="admin">Administrateur</option>
          </select>
        </div>

        <button type="submit">Création</button>
      </form>
      <div>
        <p>Déjà membre ? <Link to="/login">Connexion</Link></p>
      </div>
    </>
  );
};

export default Register;