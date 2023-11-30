import { RouterProvider } from 'react-router-dom';
import router from '../service/router';
import './App.css';
import { UserProvider } from './context/UserProvider';

const App = () => {

  return (
      <UserProvider>
        <RouterProvider router={router}>
        <div className="App">
     
            </div>
        </RouterProvider>
      </UserProvider>
  );
};

export default App;
