import dbConnection from "../services/dbConnection.js";

const getStudentByEmail = async (email) => {
  const sql = `
    SELECT *
    FROM dentarius.student
    WHERE email = :email;
  `;

  try {
    const [results] = await dbConnection.query(sql, { email });

    if (results.length === 0) {
      return null;
    }

    return results[0];
  } catch (error) {
    console.error('Error fetching student by email:', error);
    throw error;
  }
};

export { getStudentByEmail };

