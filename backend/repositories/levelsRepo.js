import dbConnection from "../services/dbConnection.js";

const getLevels = async() => {
    const sql = `
        SELECT level.*
        FROM dentarius.level;
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

const getLevelById = async (levelId) => {

    try {
        const sql = `
            SELECT *
            FROM dentarius.level
            WHERE id = :levelId;
        `;

        const [results] = await dbConnection.query(sql, { levelId });

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

export { getLevels, getLevelById };