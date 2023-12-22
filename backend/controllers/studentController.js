import { hash } from 'bcrypt';
import { createNewStudent, getStudent, getStudentById, deleteStudentById, updateStudentById } from "../repositories/studentsRepo.js";

const index = (req, res) => {
    getStudent().then( data => {
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: data,
        });
    });
};

const getStudentId = (req, res) => {
    const studentId = req.params.id;

    getStudentById(studentId)
        .then(student => {
            if (!student) {
                return res.status(404).json({
                    status: 404,
                    message: "student not found!!",
                });
            }

            return res.status(200).json({
                status: 200,
                message: "OK",
                data: student,
            });
        })
        .catch(error => {
            return res.status(500).json({
                status: 500,
                message: "Internal Server Error",
                error: error.message,
            });
        });
};


// ...



    // create student
    const createStudent = async (req, res) => {
      const { firstname, lastname, email, password, role, levell_id, country_id } = req.body;
    
      if (!firstname || !lastname || !email || !password || !role || !levell_id || !country_id) {
        return res.status(400).json({
          status: 400,
          message: "Bad Request",
          error: "Missing required data.",
        });
      }
    
      try {
        // Hache le mot de passe avant de le stocker dans la base de données
        const hashedPassword = await hash(password, 10); // 10 est le coût du hachage, tu peux ajuster selon tes besoins
    
        const newStudentId = await createNewStudent({
          firstname,
          lastname,
          email,
          password: hashedPassword, // Stocke le mot de passe haché dans la base de données
          role,
          levell_id,
          country_id,
        });
    
        return res.status(201).json({
          status: 201,
          message: "Created",
          data: {
            id: newStudentId,
          },
        });
      } catch (error) {
        return res.status(500).json({
          status: 500,
          message: "Internal Server Error",
          error: error.message,
        });
      }
    };
    


// login student by email

const getStudentByEmail = async (email) => {
    const query = 'SELECT * FROM students WHERE email = ?';
    const values = [email];
  
    try {
      const result = await pool.query(query, values); // Assure-toi d'adapter cela à ton client SQL
  
      if (result.length === 0) {
        return null; // Aucun étudiant trouvé avec cet e-mail
      }
  
      return result[0]; // Retourne le premier résultat (supposant qu'il n'y a qu'un seul étudiant avec cet e-mail)
    } catch (error) {
      throw error;
    }
  };

// delete:
const deleteStudent = async (req, res) => {
  const studentId = req.params.id;

  try {
    const deleted = await deleteStudentById(studentId);

    if (deleted) {
      return res.status(200).json({
        status: 200,
        message: "Student deleted successfully",
      });
    } else {
      return res.status(404).json({
        status: 404,
        message: "Student not found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
    
const updateStudent = async (req, res) => {
  const studentId = req.params.id;
  const { firstname, lastname, email, role, levell_id, country_id } = req.body;

  if (!firstname || !lastname || !email || !role || !levell_id || !country_id) {
    return res.status(400).json({
      status: 400,
      message: "Bad Request",
      error: "Missing required data.",
    });
  }

  try {
    // Update student data in the database
    await updateStudentById(studentId, { firstname, lastname, email, role, levell_id, country_id });

    return res.status(200).json({
      status: 200,
      message: "Updated",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
    export { index, getStudentId, createStudent, getStudentByEmail, deleteStudent, updateStudent }