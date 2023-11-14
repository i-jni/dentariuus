import dbConnection from "../services/dbConnection.js";

const getStudent = async() => {
    const sql = `
        SELECT student.*
        FROM dentarius.student;
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
const getStudentById = async (studentId) => {

    try {
        const sql = `
            SELECT *
            FROM dentarius.student
            WHERE id = :studentId;
        `;

        const [results] = await dbConnection.query(sql, { studentId });

        if (results.length === 0) {
            return null;
        }
        return results[0];
    }
    catch (error) {
        console.error('Error fetching student by ID:', error);
        throw error;
    } 
};

// create user:

const createNewStudent = async (studentData) => {
    const { firstname, lastname, email, password, role, level_id, country_id } = studentData;

    console.log('Data to be inserted:', {
        firstname,
        lastname,
        email,
        password,
        role,
        level_id,
        country_id,
    });

    const sql = `
        INSERT INTO dentarius.student (firstname, lastname, email, password, role, level_id, country_id)
        VALUES (:firstname, :lastname, :email, :password, :role, :level_id, :country_id);
    `;

    console.log('SQL Query:', sql);

    try {
        const [results] = await dbConnection.query(sql, {
            firstname,
            lastname,
            email,
            password,
            role,
            level_id,
            country_id,
        });

        console.log('Results after insertion:', results);

        return results.insertId; // Renvoie l'ID de l'étudiant inséré.
    } catch (error) {
        console.error('Error creating a new student:', error);
        throw error;
    }
};


export { getStudent, getStudentById, createNewStudent };