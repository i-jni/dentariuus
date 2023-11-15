// courses:
export async function getAllCourses() {
    const URL = "https://localhost:3001/api/courses";

    try {
        const requestInfos = new Request(URL, {
            method: "get",
        });

        const req = await fetch(requestInfos);

        if (!req.ok) {
            throw new Error(`Erreur lors de la récupération des cours : ${req.status}`);
        }

        const res = await req.json();
        return res;
    } catch (error) {
        throw new Error(`Erreur lors de la récupération des cours : ${error.message}`);
    }
}

export async function getCourse(id) {
    const URL = `https://localhost:3001/api/courses/${id}`;

    try {
        const requestInfos = new Request(URL, {
            method: "get",
        });

        const req = await fetch(requestInfos);

        if (!req.ok) {
            throw new Error(`Erreur lors de la récupération du cours : ${req.status}`);
        }

        const res = await req.json();
        return res;
    } catch (error) {
        throw new Error(`Erreur lors de la récupération du cours : ${error.message}`);
    }
}

// levels

export async function getAllLevels() {
    const URL = "https://localhost:3001/api/levels/";

    try {
        const requestInfos = new Request(URL, {
            method: "get",
        });

        const req = await fetch(requestInfos);

        if (!req.ok) {
            throw new Error(`Erreur lors de la récupération des cours : ${req.status}`);
        }

        const res = await req.json();
        return res;
    } catch (error) {
        throw new Error(`Erreur lors de la récupération des cours : ${error.message}`);
    }
}

export async function getLevel(id) {
    const URL = `https://localhost:3001/api/levels/${id}`;

    try {
        const requestInfos = new Request(URL, {
            method: "get",
        });

        const req = await fetch(requestInfos);

        if (!req.ok) {
            throw new Error(`Erreur lors de la récupération du level : ${req.status}`);
        }

        const res = await req.json();
        return res;
    } catch (error) {
        throw new Error(`Erreur lors de la récupération du level : ${error.message}`);
    }
}

// students:

export async function getAllStudents() {
    const URL = "https://localhost:3001/api/student";

    try {
        const requestInfos = new Request(URL, {
            method: "get",
        });

        const req = await fetch(requestInfos);

        if (!req.ok) {
            throw new Error(`Erreur lors de la récupération des Students : ${req.status}`);
        }

        const res = await req.json();
        return res;
    } catch (error) {
        throw new Error(`Erreur lors de la récupération des Students : ${error.message}`);
    }
}

export async function getStudent(id) {
    const URL = `https://localhost:3001/api/student/${id}`;

    try {
        const requestInfos = new Request(URL, {
            method: "get",
        });

        const req = await fetch(requestInfos);

        if (!req.ok) {
            throw new Error(`Erreur lors de la récupération du Student : ${req.status}`);
        }

        const res = await req.json();
        return res;
    } catch (error) {
        throw new Error(`Erreur lors de la récupération du Student : ${error.message}`);
    }
}

// post
// delete this:
export async function createStudentd() {
    const URL = "https://localhost:3001/api/student";

    try {
        const requestInfos = new Request(URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(),
        });

        const req = await fetch(requestInfos);

        if (!req.ok) {
            throw new Error(`Erreur lors de la création de l'étudiant : ${req.status}`);
        }

        const res = await req.json();
        return res;
    } catch (error) {
        throw new Error(`Erreur lors de la création de l'étudiant : ${error.message}`);
    }
}

export async function getAllCountries() {
    const URL = "https://localhost:3001/api/country";

    try {
        const requestInfos = new Request(URL, {
            method: "get",
        });

        const req = await fetch(requestInfos);

        if (!req.ok) {
            throw new Error(`Erreur lors de la récupération des Students : ${req.status}`);
        }

        const res = await req.json();
        return res;
    } catch (error) {
        throw new Error(`Erreur lors de la récupération des Students : ${error.message}`);
    }
}


// 

export const createStudent = async (data) => {
    const URL = "https://localhost:3001/api/student";
  
    const request = new Request(URL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    try {
      const response = await fetch(request);
      const json = await response.json();
  
      if (response.status === 201) {
        return {
          success: true,
          studentId: json.data.id,
        };
      } else {
        throw new Error('Erreur lors de la création du compte.');
      }
    } catch (error) {
      throw new Error('Erreur lors de la communication avec le serveur.');
    }
  };


//   login
//   export const loginUser = async (data) => {
//     const URL = "https://localhost:3001/api/student"; // Assurez-vous de mettre à jour l'URL avec la route correcte pour la connexion
  
//     const request = new Request(URL, {
//       method: "POST", // Utilisez la méthode HTTP appropriée pour la connexion
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });
  
//     try {
//       const response = await fetch(request);
  
//       if (response.status === 200) { // Assurez-vous que le statut de réussite est correct selon votre implémentation
//         return {
//           success: true,
//           // D'autres données à retourner si nécessaire
//         };
//       } else {
//         throw new Error('Erreur lors de la connexion.');
//       }
//     } catch (error) {
//       throw new Error('Erreur lors de la communication avec le serveur.');
//     }
//   };
  


// export const loginUser = async (data) => {
//     const URL = "https://localhost:3001/api/login"; // Assurez-vous de mettre à jour l'URL avec la route correcte pour la connexion
  
//     const request = new Request(URL, {
//       method: "POST", // Utilisez la méthode HTTP appropriée pour la connexion
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });
  
//     try {
//       const response = await fetch(request);
  
//       if (response.status === 200) { // Assurez-vous que le statut de réussite est correct selon votre implémentation
//         const userData = await response.json();
//         return {
//           success: true,
//           userData, // Ajoutez les données de l'utilisateur à l'objet renvoyé
//         };
//       } else {
//         const errorData = await response.json();
//         throw new Error(errorData.message); // Lève une exception avec le message d'erreur renvoyé par le serveur
//       }
//     } catch (error) {
//       throw new Error('Erreur lors de la communication avec le serveur.');
//     }
//   };

export const loginUser = async (data) => {
    const URL = "https://localhost:3001/api/student/login";
  
    const request = new Request(URL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    try {
      const response = await fetch(request);
  
      if (!response.ok) {
          const errorData = await response.text();
          console.log('Error response from server:', errorData);
        throw new Error(errorData.message || 'Erreur lors de la connexion.');
      }
  
      const userData = await response.json();
      return {
        success: true,
        userData,
      };
    } catch (error) {
      throw new Error(`Erreur lors de la communication avec le serveur: ${error.message}`);
    }
  };
  