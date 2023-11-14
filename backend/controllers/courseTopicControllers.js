import { getCoursesIdTopic} from "../repositories/courseTopicRepo.js";
import { getTopics } from "../repositories/topicsRepo.js";

// coursesBytopic:
const listAllCoursesAndTopics = async (req, res) => {
  // const topicId = req.params.topicId; 
  const getTopicsAll = await getTopics();

  let courses = [];
  getTopicsAll.map(async value => {
    const getCoursesAll = await getCoursesIdTopic(value.id);
    let results = { ...value, courses: getCoursesAll };
    // console.log(results);
    courses.push(results);
    // return courses;
    return res
      .status(200)
      .json({ status: 200, message: "OK", data: courses });
    });
  
};


export { listAllCoursesAndTopics };
