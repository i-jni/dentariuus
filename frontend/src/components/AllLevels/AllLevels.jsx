import  { useEffect, useState } from "react";
import { getAllLevels } from "../../../service/api.jsx";
import PropTypes from 'prop-types';

const Alllevels = ({ displayAsDropdown = false , onSelectLevel}) => {
    const [levels, setlevels] = useState([]);
    const [selectedLevel, setSelectedLevel] = useState(''); // Pour la liste déroulante

    useEffect(() => {
        getAllLevels()
            .then((data) => {
                if (data && data.data) { 
                    setlevels(data.data);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);


     const handleDropdownChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedLevel(selectedValue);

        // Utilisez la prop onSelectLevel pour transmettre la valeur sélectionnée
        if (onSelectLevel) {
            onSelectLevel(selectedValue);
        }
    };

    return (
        <div>
            <h2>Liste des levels:</h2>

            {displayAsDropdown ? ( // Affichage sous forme de liste déroulante
                <select name="level" value={selectedLevel} onChange={handleDropdownChange}>
                    <option value="">Sélectionnez un niveau</option>
                    {levels.map((level) => (
                        <option key={level.id} value={level.id}>
                            {level.name}
                        </option>
                    ))}
                </select>
            ) : ( // Affichage en état par défaut
                levels && levels.length > 0 ? (
                    levels.map((level) => (
                        <p key={level.id}>{level.name}</p>
                    ))
                ) : (
                    <p>Aucun level disponible pour le moment.</p>
                )
            )}
        </div>
    );
}
Alllevels.propTypes = {
    displayAsDropdown: PropTypes.bool
};
export default Alllevels;
