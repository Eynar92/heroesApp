import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../";

export const LoginPage = () => {

  const { login } = useContext(AuthContext)
  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/marvel';
    login('Joel Alvarez');

    navigate(lastPath, {
      replace: true, // "Elimina" la ruta actual para que en la nueva ruta no podamos retornar a esta apretando el botón de "atras" del navegador.
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={onLogin}
      >
        Login
      </button>
    </div>
  )
}
