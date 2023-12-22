import dbConnection from "../services/dbConnection.js";

const getCourses = async() => {
    const sql = `
        SELECT course.*
        FROM dentarius.course;
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

const getCourseById = async (courseId) => {

    try {
        const sql = `
            SELECT *
            FROM dentarius.course
            WHERE id = :courseId;
        `;

        const [results] = await dbConnection.query(sql, { courseId });

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

// create : les ? ?, sont des paramaetre preparé pour eviter les injection sql

const createCourse = async ([course_name, title, content, document, student_id, levell_id]) => {
    const sql = `
      INSERT INTO dentarius.course (course_name, title, content, document, student_id, levell_id)
      VALUES (?, ?, ?, ?, ?, ?);
    `;
  
    try {
        const [results] = await dbConnection.query(sql, [
            course_name,
            title,
            content,
            document,
            student_id,
            levell_id,
        ]);
        return results.insertId;
    } catch (error) {
        console.error('Error creating a new course:', error);
        throw error;
    }
};

// DELETE:

const deleteCourseById = async (courseId) => {
    const sql = `
      DELETE FROM dentarius.course
      WHERE id = :courseId;
    `;
  
    try {
      const [results] = await dbConnection.query(sql, { courseId });
      return results.affectedRows > 0; 
    } catch (error) {
      console.error('Error deleting course by ID:', error);
      throw error;
    }
};
  
const updateCourseById = async (id, [course_name, title, content, document, student_id, levell_id]) => {
  const sql = `
    UPDATE dentarius.course
    SET course_name = ?, title = ?, content = ?, document = ?, student_id = ?, levell_id = ?
    WHERE id = ?;
  `;

  try {
    await dbConnection.query(sql, [
      course_name,
      title,
      content,
      document,
      student_id,
      levell_id,
      id,
    ]);
  } catch (error) {
    console.error("Error updating course:", error);
    throw error;
  }
};


  
  
export { getCourses, getCourseById, createCourse, deleteCourseById, updateCourseById };