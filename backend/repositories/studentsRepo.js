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
    const { firstname, lastname, email, password, role, levell_id, country_id } = studentData;

    console.log('Data to be inserted:', {
        firstname,
        lastname,
        email,
        password,
        role,
        levell_id,
        country_id,
    });

    const sql = `
        INSERT INTO dentarius.student (firstname, lastname, email, password, role, levell_id, country_id)
        VALUES (:firstname, :lastname, :email, :password, :role, :levell_id, :country_id);
    `;

    console.log('SQL Query:', sql);

    try {
        const [results] = await dbConnection.query(sql, {
            firstname,
            lastname,
            email,
            password,
            role,
            levell_id,
            country_id,
        });

        console.log('Results after insertion:', results);

        return results.insertId; // Renvoie l'ID de l'étudiant insérée
    } catch (error) {
        console.error('Error creating a new student:', error);
        throw error;
    }
};

// delete student:

const deleteStudentById = async (studentId) => {
    const sql = `
      DELETE FROM dentarius.student
      WHERE id = :studentId;
    `;
  
    try {
      const [results] = await dbConnection.query(sql, { studentId });
      return results.affectedRows > 0; // Renvoie true si au moins une ligne a été supprimée
    } catch (error) {
      console.error('Error deleting student by ID:', error);
      throw error;
    }
  };

//   update

const updateStudentById = async (studentId, updatedData) => {
    const { firstname, lastname, email, role, levell_id, country_id } = updatedData;
  
    const sql = `
      UPDATE dentarius.student
      SET firstname = :firstname, lastname = :lastname, email = :email, role = :role, levell_id = :levell_id, country_id = :country_id
      WHERE id = :studentId;
    `;
  
    try {
      await dbConnection.query(sql, { studentId, firstname, lastname, email, role, levell_id, country_id });
    } catch (error) {
      console.error('Error updating student:', error);
      throw error;
    }
};
  
export { getStudent, getStudentById, createNewStudent, deleteStudentById, updateStudentById };