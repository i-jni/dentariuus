import { RouterProvider } from 'react-router-dom';
// import { useState } from 'react';
import router from '../service/router';
import './App.css';
import { UserProvider } from './context/UserProvider';

const App = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

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
