import dbConnection from "../services/dbConnection.js";

const getTopics = async() => {
    const sql = `
        SELECT topic.*
        FROM dentarius.topic;
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

const getTopicById = async (topicId) => {

    try {
        const sql = `
            SELECT *
            FROM dentarius.topic
            WHERE id = :topicId
            ;
        `;

        const [results] = await dbConnection.query(sql, { topicId });

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

export { getTopics, getTopicById };