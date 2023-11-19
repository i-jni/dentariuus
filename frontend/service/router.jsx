import { createBrowserRouter } from 'react-router-dom';
import {PrivateRoute,LoggedinRestriction} from './privateRoute.jsx';

import Homepage from '../src/page/homepage/Homepage.jsx';
import RootLayout from '../src/layout/RootLayout.jsx';
import AllCourses from '../src/components/AllCourses/AllCourses.jsx';
import CourseDetail from '../src/components/CourseDetail/CourseDetail.jsx';
import Alllevels from '../src/components/AllLevels/AllLevels.jsx';
import AllStudents from '../src/components/AllStudents/AllStudents.jsx';
import StudentDetail from '../src/components/StudentDetail/StudentDetail.jsx';
import Register from '../src/components/AddStudent/AddStudent.jsx';
import Allcountrys from '../src/components/Countrys/Countrys.jsx';
import Login from '../src/components/Login/Login.jsx';
import UserSpace from '../src/page/user-space/Userspace.jsx';
import StudentSetting from '../src/components/editStudent/editStudent.jsx';
import CourseForm from '../src/components/addCourse/AddCourse.jsx';
import AllTopics from '../src/components/topics/allTopics.jsx';
import TopicDetail from '../src/components/TopicsDetail/TopicsDetaiL.jsx';
import AllCoursesByTopic from '../src/components/AllCoursesBytopics/AllCoursesByTopics.jsx';
import TopicCourseDetail from '../src/components/CoursesByTopicId/CoursesByTopicId.jsx';


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '',
                element: <Homepage />
            },
            {
                path: 'courses',
                element: <AllCourses />
            },
            {
                path: 'courses/:id',
                element: <CourseDetail />
            },
            {
                path: 'addcourse',
                element: <CourseForm />
            },
            {
                path: 'levels',
                element: <Alllevels />
            },
            {
                path: 'country',
                element: <Allcountrys />
            },
            {
                path: 'topics',
                element: <AllTopics />
            },
            {
                path: 'topics/:id',
                element: <TopicDetail />
            },
            {
                path: 'topics_courses/',
                element: <AllCoursesByTopic />
            },
            {
                path: 'topics_courses/:id',
                element: <TopicCourseDetail/>
            },

            {
                path: 'students',
                element: <AllStudents />
            },
            // elle est pas utiliser :!!
            {
                path: 'userspace',
                element: <UserSpace />
            },


            // privates routes -------------------------
            // si user pas connecter = pas acces au profil, !ajouter liste de cours!
            {
                path: 'setting/:id',
                element: (
                    <PrivateRoute>
                        <StudentSetting />
                    </PrivateRoute>
                ),
            },
            {
                path: 'students/:id',
                element: (
                    <PrivateRoute>
                        <StudentDetail />
                    </PrivateRoute>)
            },

            // si user est connecté : ne peut pas acceder a ces pages:
            {
                path: 'register',
                element: (
                    <LoggedinRestriction>
                        <Register />
                    </LoggedinRestriction>)
            },
            {
                path: 'login',
                element: (
                    <LoggedinRestriction>
                        <Login />
                    </LoggedinRestriction>)
            },
            
        ],
    },
]);

export default router;