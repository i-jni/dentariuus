import {useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../../service/api.jsx";
import { UserContext } from "../../context/UserProvider.jsx";
import { TitleH2 } from "../../atomes/titles/Titles.jsx";
import styles from './login.module.scss'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [timeout, setTimeout] = useState(false);

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (timeout) {
      setError("Veuillez patienter 30 secondes avant de réessayer.");
      setIsLoading(false);
      return;
    }
  
    try {
      const result = await loginUser({ email, password });
      const studentId = result.userData?.data?.id;
      const token = result.userData?.data?.token;
      // console.log(result, 'rrres');
  
      if (result.success && studentId !== null) {
        localStorage.setItem('jwtToken', token);
        setUser(result.userData?.data);
        navigate(`/students/${studentId}`);
      }
    } catch (err) {
      setError(err.message);
      setAttempts(attempts + 1);
      if (attempts >= 4) {
        setTimeout(true);
        setError("Trop de tentatives échouées... Veuillez patienter 30 secondes avant de réessayer.");
        setTimeout(() => {
          setTimeout(false);
          setAttempts(0);
        }, 30000); 
      }
    }
  
    setIsLoading(false);
  };

  return (
    <section className="login-screen">
      
      <div className="login-form-wrapper">
        <TitleH2 h2="Connexion"/>
        <section className="loginform-container">
          <div id="login">
            <form className="login-form" onSubmit={handleSubmit}>
              <label>E-mail</label> 
              <input
                autoFocus
                maxLength="25"
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <label>Mot de passe</label> 

              <input
                autoComplete="off"
                maxLength="12"
                minLength="8"
                placeholder="Mot de passe"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              <input
                type="submit"
                value="Se connecter"
                disabled={isLoading || timeout}
                className="btn green"
              />
              {error && <div className="error" style={{ color: "red" }}>{error}</div>}
            </form>
          </div>
          <div className={styles.notmemberContainer}>
            <p>
              Pas membre ? <Link to="/register">Inscription</Link>{" "}
            </p>
            <a href="">Mot de passe oublié ? Contactez l'admin</a>
          </div>
         
        </section>
      </div>
    </section>
  );
}

export default Login;