import dbConnection from "../services/dbConnection.js";

const getCoursesIdTopic = async (idTopic) => {
  try {
    const sql = `
      SELECT course.*
      FROM dentarius.course
      JOIN dentarius.topic
      JOIN dentarius.course_topic
      ON course_topic.topic_id = topic.id
      AND course_topic.course_id = course.id
      WHERE topic.id = :idTopic
    ;
    `;
    const [results] = await dbConnection.query(sql, { idTopic: idTopic });
    return results;

    // if (results.length === 0 || results[0].courses_id === null) {
    //   return []; 
    // }
    // const coursesIdsArray = results.map(result => ({
    //   id: result.id,
    //   name: result.name,
    //   courses_id: result.courses_id.split(',').map(id => parseInt(id, 10))
    // }));
    // return coursesIdsArray
  }

  catch (error) {
  return error;
  }
};

// ;


export { getCoursesIdTopic };