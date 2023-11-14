import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../../service/api.jsx";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await loginUser({ email, password });

      if (result.success) {
        // Gérer la réussite de la connexion
        navigate(`/`);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  return (
    <main className="login-screen">
      
      <div className="login-form-wrapper">
        <h1 className="login-title">Connexion</h1>
        <section className="loginform-container">
          <div id="login">
            <form className="login-form" onSubmit={handleSubmit}>
              <span className="fa fa-user" />
              <input
                autoFocus
                maxLength="25"
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <span className="fa fa-lock" />
              <input
                autoComplete="off"
                maxLength="12"
                placeholder="Mot de passe"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              <input
                type="submit"
                value="Se connecter"
                disabled={isLoading}
                style={{ marginBottom: "20px" }}
              />
              {error && <div className="error" style={{ color: "red" }}>{error}</div>}
            </form>
          </div>
          <div className="notmember-container">
            <p>
              Pas membre ? <Link to="/register">Inscription</Link>{" "}
              <span className="fa fa-arrow-right" />
            </p>
          </div>
         
        </section>
      </div>
    </main>
  );
}

export default Login;