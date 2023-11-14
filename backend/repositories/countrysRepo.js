import dbConnection from "../services/dbConnection.js";

const getcountrys = async() => {
    const sql = `
        SELECT country.*
        FROM dentarius.country;
    `;
    
    try {
        const [results] = await dbConnection.execute(sql);
        // console.log(results);
        return results;
    } catch (error) {
        // console.log(error);
        return error;
    }
    
}

const getcountryById = async (countryId) => {

    try {
        const sql = `
            SELECT *
            FROM dentarius.country
            WHERE id = :countryId;
        `;

        const [results] = await dbConnection.query(sql, { countryId });

        if (results.length === 0) {
            return null;
        }
        return results[0];
    }
    catch (error) {
        console.error('Error fetching course by ID:', error);
        throw error;
    } 
};

export { getcountrys, getcountryById };