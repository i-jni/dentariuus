import { compare } from 'bcrypt';
import { getStudentByEmail } from '../repositories/authRepo.js'

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Récupérez l'étudiant par email depuis la base de données
    const student = await getStudentByEmail(email);

    if (!student) {
      return res.status(404).json({
        status: 404,
        message: "Utilisateur non trouvé",
      });
    }

    // Comparez les mots de passe
    const passwordMatch = await compare(password, student.password);

    if (!passwordMatch) {
      return res.status(401).json({
        status: 401,
        message: "Mot de passe incorrect",
      });
    }

    // Si les identifiants sont valides, renvoyez les informations de l'utilisateur (vous pouvez personnaliser cela en fonction de vos besoins)
    return res.status(200).json({
      status: 200,
      message: "Connexion réussie",
      data: {
        id: student.id,
        firstname: student.firstname,
        lastname: student.lastname,
        // ... d'autres données si nécessaire
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Erreur interne du serveur",
      error: error.message,
    });
  }
};

export { loginUser };