import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getAllCountries } from "../../../service/api.jsx";

const Allcountrys = ({ displayAsDropdown = false, onSelectCountry }) => {
    const [countrys, setCountrys] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(''); // For dropdown list

    useEffect(() => {
        getAllCountries()
            .then((data) => {
                if (data && data.data) {
                    setCountrys(data.data);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleDropdownChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedCountry(selectedValue);
        
        // Utilisez la prop onSelectCountry pour transmettre la valeur sélectionnée
        if (onSelectCountry) {
            onSelectCountry(selectedValue);
        }
    };

    return (
        <div>
            <h2>Liste des pays:</h2>

            {displayAsDropdown ? ( // Display as dropdown list
                <select name="country_id" value={selectedCountry} onChange={handleDropdownChange}>
                    <option value="">Sélectionnez un pays</option>
                    {countrys.map((country) => (
                        <option key={country.id} value={country.id}>
                            {country.name}
                        </option>
                    ))}
                </select>
            ) : ( // Display in default state
                countrys && countrys.length > 0 ? (
                    countrys.map((country) => (
                        <p key={country.id}>{country.name}</p>
                    ))
                ) : (
                    <p>Aucun pays disponible pour le moment.</p>
                )
            )}
        </div>
    );
}

Allcountrys.propTypes = {
    displayAsDropdown: PropTypes.bool,
    onSelectCountry: PropTypes.func, // Ajout de la prop onSelectCountry
};

export default Allcountrys;
