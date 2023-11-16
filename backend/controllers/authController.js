import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
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

    const token = jwt.sign(
      { userId: student.id, email: student.email }, // Contenu du token (payload)
      'secretKey', // Clé secrète pour signer le token (peut être n'importe quelle chaîne secrète)
      { expiresIn: '2h' } // Optionnel : expiration du token (dans cet exemple, le token expirera après 1 heure)
    );

      // Vérifie si le token peut être déchiffré avec la clé secrète
  try {
    const decodedToken = jwt.verify(token, 'secretKey');
    console.log(decodedToken);
  } catch (error) {
    console.error('Error decoding token:', error);
  }
   
    return res.status(200).json({
      status: 200,
      message: "Connexion réussie",
      data: {
        id: student.id,
        firstname: student.firstname,
        lastname: student.lastname,
        token
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