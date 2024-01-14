import { RouterProvider } from 'react-router-dom';
import router from '../service/router';
// import './App.css';
// import '/src/assets/scss/style'

import { UserProvider } from './context/UserProvider';
import Navigation from './components/navigation/Navigation';

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
