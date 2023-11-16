import { RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import router from '../service/router';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <RouterProvider router={router}>
      <div className="App">
        {/* Tu peux inclure des composants ou du contenu global ici */}
        {/* par exemple, un en-tête commun à toutes les pages */}
        
        {/* Enveloppe tes routes dans le contexte d'authentification */}
        <RouterProvider isAuthenticated={isAuthenticated} router={router} />
      </div>
    </RouterProvider>
  );
};

export default App;
