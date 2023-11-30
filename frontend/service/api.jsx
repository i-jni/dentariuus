// import { getToken } from "./token";


// topics

export async function getAllTopics() {
  const URL = "https://localhost:3001/api/topics/liste";

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
  const URL = `https://localhost:3001/api/topics/liste/${id}`;

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
  const URL = "https://localhost:3001/api/topics/courses";

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
  const URL = `https://localhost:3001/api/topics/courses/${id}`;

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
  const URL = "https://localhost:3001/api/courses/create";

  try {
    const formData = new FormData();
    formData.append('course_name', courseData.course_name);
    formData.append('title', courseData.title);
    formData.append('content', courseData.content);
    formData.append('document', courseData.document);
    formData.append('student_id', courseData.student_id);
    formData.append('level_id', courseData.level_id);
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
// All courses:
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

// Delete course:

export const deleteCourseById = async (id) => {
  const URL = `https://localhost:3001/api/courses/${id}`;

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


// post

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


// -------------------- STUDENT -----------------------------------

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


export const loginUser = async (data) => {
    const URL = "https://localhost:3001/api/student/login";
    // const token = getToken();
    const request = new Request(URL, {
      method: "POST",
      headers: {
        // 'Authorization': `Bearer ${token}`,
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
  
//   delete student :
export const deleteStudentById = async (id) => {
    const URL = `https://localhost:3001/api/student/${id}`;
  
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
    const URL = `https://localhost:3001/api/student/${id}`;
  
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