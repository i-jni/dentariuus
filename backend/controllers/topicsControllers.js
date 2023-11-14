
import { getCoursesIdTopic } from "../repositories/courseTopicRepo.js";
import { getTopics, getTopicById } from "../repositories/topicsRepo.js";

// avoir tout les topics ainsi que le tableau de leur cours, tab: topics, tab:courses;:

// list des topics + courses: route: topics/courses/
const topicsCourses = async (req, res) => {
    const getTopicsAll = await getTopics();
    
    let listTopics = [];
    getTopicsAll.map(async value => {
        const getAllCourses = await getCoursesIdTopic(value.id);
        let listCourses = [];
        getAllCourses.map(data => {
            listCourses.push(data);
        });
        let results = { ...value, courses: listCourses };
        listTopics.push(results);

        if (listTopics.length === getTopicsAll.length) {
            return res
                .status(200)
                .json({ status: 200, message: "OK", data: listTopics });
        }

    });

};

// topics/courses/:id
const topicsCoursesById = async (req, res) => {
    const idTopic = req.params.id;
    try {
      const topic = await getTopicById(idTopic);
      if (!topic) {
        return res.status(404).json({
          status: 404,
          message: "Topic not found!!",
        });
      }
  
      const courses = await getCoursesIdTopic(idTopic);
      return res.status(200).json({ status: 200, message: "OK", data: { ...topic, courses } });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  };
  


// list des topics seuls: route: topics/liste
const listTopics = (req, res) => {
    getTopics().then( data => {
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: data,
        });
    });
};

// avoir un topic seul via son id: route /topics/liste/id
const getTopic = (req, res) => {
    const topicId = req.params.id;

    getTopicById(topicId)
        .then(topic => {
            if (!topic) {
                return res.status(404).json({
                    status: 404,
                    message: "topic not found!!",
                });
            }

            return res.status(200).json({
                status: 200,
                message: "OK",
                data: topic,
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


export { topicsCourses, getTopic, listTopics, topicsCoursesById }