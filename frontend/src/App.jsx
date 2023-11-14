import { RouterProvider } from 'react-router-dom';
import router from '../service/router';
import './App.css'
// import AllCourses from './components/AllCourses/AllCourses'

const App = () => <RouterProvider router={ router } />;

export default App;