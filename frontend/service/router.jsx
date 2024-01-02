import { createBrowserRouter } from 'react-router-dom';
import {PrivateRoute,LoggedinRestriction} from './PrivateRoute.jsx';

import Homepage from '../src/page/homepage/Homepage.jsx';
import RootLayout from '../src/layout/RootLayout.jsx';
import AllCourses from '../src/components/AllCourses/AllCourses.jsx';
import CourseDetail from '../src/components/CourseDetail/CourseDetail.jsx';
import AllLevels from '../src/components/Alllevels/AllLevels.jsx';
import AllStudents from '../src/components/AllStudents/AllStudents.jsx';
import StudentDetail from '../src/components/StudentDetail/StudentDetail.jsx';
import Register from '../src/components/AddStudent/AddStudent.jsx';
import Allcountrys from '../src/components/Countrys/Countrys.jsx';
import Login from '../src/components/Login/Login.jsx';
import UserSpace from '../src/page/user-space/Userspace.jsx';
import StudentSetting from '../src/components/editStudent/EditStudent.jsx';
import CourseForm from '../src/components/addCourse/AddCourse.jsx';
import AllTopics from '../src/components/topics/AllTopics.jsx';
import TopicDetail from '../src/components/TopicsDetail/TopicsDetaiL.jsx';
import AllCoursesByTopic from '../src/components/AllCoursesBytopics/AllCoursesByTopics.jsx';
import TopicCourseDetail from '../src/components/CoursesByTopicId/CoursesByTopicId.jsx';
import EditCourse from '../src/components/editCourse/EditCourse.jsx';
import TopicCourseCard from '../src/components/topicsCourseCards/TopicCourseCard.jsx';
import ListeCoursePage from '../src/page/ListeCourse/ListeCoursePage.jsx';


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
                path: 'liste',
                element: <ListeCoursePage />
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
                path: 'editcourse/:id',
                element: <EditCourse />
            },
            {
                path: 'levels',
                element: <AllLevels />
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
            // {
            //     path: 'topics_courses/:id',
            //     element: <TopicCourseDetail/>
            // },

            {
                path: 'students',
                element: <AllStudents />
            },
            {
                path: 'card',
                element: <TopicCourseCard />
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
                    </PrivateRoute >

                ),
            },
            {
                path: 'students/:id',
                element: (
                    <PrivateRoute>
                        <StudentDetail />
                    </PrivateRoute >
                    )
            },
            {
                path: 'topics_courses/:id',
                element: (
                    <PrivateRoute>
                        <TopicCourseDetail />
                    </PrivateRoute >
                    )
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