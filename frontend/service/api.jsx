// import { getToken } from "./token";


// topics
const apiUrl = import.meta.env.VITE_API_URL;

export async function getAllTopics() {
  const URL = `${apiUrl}/topics/liste`;

  try {
      const requestInfos = new Request(URL, {
          method: "get",
      });

      const req = await fetch(requestInfos); 

      if (!req.ok) {
          throw new Error(`Erreur lors de la récupération des topics : ${req.status}`);
      }

      const res = await req.json();
      return res;
  } catch (error) {
      throw new Error(`Erreur lors de la récupération des topics : ${error.message}`);
  }
}

export async function getTopic(id) {
  const URL = `${apiUrl}/topics/liste/${id}`;

  try {
      const requestInfos = new Request(URL, {
          method: "get",
      });

      const req = await fetch(requestInfos);

      if (!req.ok) {
          throw new Error(`Erreur lors de la récupération du topic precis : ${req.status}`);
      }

      const res = await req.json();
      return res;
  } catch (error) {
      throw new Error(`Erreur lors de la récupération du topic precis : ${error.message}`);
  }
}

// recuperation des cours liés a chaque topic

export async function getAllCoursesByTopics() {
  const URL = `${apiUrl}/topics/courses`;

  try {
      const requestInfos = new Request(URL, {
          method: "get",
      });

      const req = await fetch(requestInfos);

      if (!req.ok) {
          throw new Error(`Erreur lors de la récupération des cours by topic : ${req.status}`);
      }

      const res = await req.json();
      return res;
  } catch (error) {
      throw new Error(`Erreur lors de la récupération des cours by topic: ${error.message}`);
  }
}

export async function getAllCoursesByTopicsId(id) {
  const URL = `${apiUrl}/topics/courses/${id}`;

  try {
      const requestInfos = new Request(URL, {
          method: "get",
      });

      const req = await fetch(requestInfos);

      if (!req.ok) {
          throw new Error(`Erreur lors de la récupération des cours du topic precis du topic precis : ${req.status}`);
      }

      const res = await req.json();
      return res;
  } catch (error) {
      throw new Error(`Erreur lors de la récupération des cours du topic precis : ${error.message}`);
  }
}

// create course :
export async function createNewCourse(courseData) {
  const URL = `${apiUrl}/courses/create`;

  try {
    const formData = new FormData();
    formData.append('course_name', courseData.course_name);
    formData.append('title', courseData.title);
    formData.append('content', courseData.content);
    formData.append('document', courseData.document);
    formData.append('student_id', courseData.student_id);
    formData.append('levell_id', courseData.levell_id);
    formData.append('topics', courseData.topics); 

    const requestInfos = new Request(URL, {
      method: "post",
      body: formData,
    });

    const req = await fetch(requestInfos);

    if (!req.ok) {
      throw new Error(`Erreur create cours  lors de la création du cours : ${req.status}`);
    }

    const res = await req.json();
    return res;
  } catch (error) {
    throw new Error(`Erreur lors de la création du cours : ${error.message}`);
  }
}

export async function updateCourse(courseId, courseData) {
  const URL = `${apiUrl}/courses/update/${courseId}`;

  try {
    const formData = new FormData();
    formData.append('course_name', courseData.course_name);
    formData.append('title', courseData.title);
    formData.append('content', courseData.content);
    if (courseData.document) {
      formData.append('document', courseData.document);
    }
    formData.append('student_id', courseData.student_id);
    formData.append('levell_id', courseData.levell_id);
    formData.append('topics', courseData.topics);
    // formData.append('topics', JSON.stringify(courseData.topics));

    const requestInfos = new Request(URL, {
      method: "PUT",
      body: formData,
    });

    const req = await fetch(requestInfos);

    if (!req.ok) {
      throw new Error(`Erreur lors de la mise à jour du cours : ${req.status}`);
    }

    const res = await req.json();
    return res;
  } catch (error) {
    throw new Error(`Erreur lors de la mise à jour du cours : ${error.message}`);
  }
}

// All courses:
export async function getAllCourses() {
    const URL = `${apiUrl}/courses`;

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
    const URL = `${apiUrl}/courses/${id}`;

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

// Delete course:

export const deleteCourseById = async (id) => {
  const URL = `${apiUrl}/courses/${id}`;

  const request = new Request(URL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  try {
    const response = await fetch(request);

    if (!response.ok) {
      const errorData = await response.text();
      console.log('Error response from server:', errorData);
      throw new Error(errorData.message || 'Erreur lors de la suppression du cours..');
    }

    return {
      success: true,
      message: 'Suppression cours réussie!',
    };
  } catch (error) {
    throw new Error(`Erreur lors de la communication avec le serveur: ${error.message}`);
  }
};

// Search

export async function getSearchCourses(query) {
  const URL = `${apiUrl}/courses/search/${query}`;

  try {
      const requestInfos = new Request(URL, {
          method: "get",
      });

      const req = await fetch(requestInfos);

      if (!req.ok) {
          throw new Error(`Erreur lors de la recherche dans les cours : ${req.status}`);
      }

      const res = await req.json();
      return res;
  } catch (error) {
      throw new Error(`Erreur lors de la recherche dans les courss : ${error.message}`);
  }
}


// levels

export async function getAllLevels() {
    const URL = `${apiUrl}/levels/`;

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
    const URL = `${apiUrl}/api/levels/${id}`;

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


// post

export async function getAllCountries() {
    const URL = `${apiUrl}/country`;

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


// -------------------- STUDENT -----------------------------------

export async function getAllStudents() {
  const URL = `${apiUrl}/student`;

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
  const URL = `${apiUrl}/student/${id}`;

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

export const createStudent = async (data) => {
    const URL = `${apiUrl}/student`;
  
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


export const loginUser = async (data) => {
  const URL = `${apiUrl}/student/login`;
  const request = new Request(URL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  try {
    const response = await fetch(request);
  
    if (response.status === 400) {
      throw new Error("Email et mot de passe requis.");
    } else if (response.status === 401) {
      throw new Error("Mot de passe incorrect.");
    } else if (response.status === 404) {
      throw new Error("Utilisateur non trouvé. Veuillez vérifier votre email.");
    } else if (!response.ok) {
      const errorData = await response.json();
      console.error('Error response from server:', errorData);
      throw new Error(errorData.message || 'Erreur lors de la connexion.');
    }
  
    const userData = await response.json();
    // console.log('Login successful. User data:', userData);
  
    return {
      success: true,
      userData,
    };
  } catch (error) {
    throw new Error(`Erreur: ${error.message}`);
  }
}
  
  
//   delete student :
export const deleteStudentById = async (id) => {
    const URL = `${apiUrl}/student/${id}`;
  
    const request = new Request(URL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    try {
      const response = await fetch(request);
  
      if (!response.ok) {
        const errorData = await response.text();
        console.log('Error response from server:', errorData);
        throw new Error(errorData.message || 'Erreur lors de la suppression.');
      }
  
      return {
        success: true,
        message: 'Suppression réussie.',
      };
    } catch (error) {
      throw new Error(`Erreur lors de la communication avec le serveur: ${error.message}`);
    }
  };
  

//   update put student:

export const updateStudent = async (id, data) => {
    const URL = `${apiUrl}/student/${id}`;
  
    const request = new Request(URL, {
      method: 'PUT',
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
        throw new Error(errorData.message || 'Erreur lors de la mise à jour.');
      }
  
      return {
        success: true,
        message: 'Mise à jour réussie.',
      };
    } catch (error) {
      throw new Error(`Erreur lors de la communication avec le serveur: ${error.message}`);
    }
  };