import { createBrowserRouter, Navigate } from 'react-router-dom';
import Homepage from '../src/page/homepage/Homepage.jsx';
import RootLayout from '../src/layout/RootLayout.jsx';
import AllCourses from '../src/components/AllCourses/AllCourses.jsx';
import CourseDetail from '../src/components/CourseDetail/CourseDetail.jsx';
import Alllevels from '../src/components/AllLevels/AllLevels.jsx';
import AllStudents from '../src/components/AllStudents/AllStudents.jsx';
import StudentDetail from '../src/components/StudentDetail/StudentDetail.jsx';
import AddStudent from '../src/components/AddStudent/AddStudent.jsx';
import Allcountrys from '../src/components/Countrys/Countrys.jsx';
import Login from '../src/components/Login/Login.jsx';
import UserSpace from '../src/page/user-space/Userspace.jsx';


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
                path: 'levels',
                element: <Alllevels />
            },
            {
                path: 'country',
                element: <Allcountrys />
            },
            {
                path: 'students',
                element: <AllStudents />
            },
            {
                path: 'students/:id',
                element: <StudentDetail />
            },
            {
                path: 'addstudent',
                element: <AddStudent />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'userspace',
                element: <UserSpace />
            },

        ],
    },
]);

export default router;