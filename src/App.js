import { useState } from "react";

export default function App() {

  // Input usuario y pass "SignIn"
  const [userSignIn, setUserSignIn] = useState("");
  const [passSignIn, setPassSignIn] = useState("");

  // Input usuario y pass "Login"
  const [userLogin, setUserLogin] = useState("");
  const [passLogin, setPassLogin] = useState("");

  // Input usuario y pass guardado
  const [savedUser, setSavedUser] = useState("");
  const [savedPass, setSavedPass] = useState("");

  // Estados para ocultar input de SignIn y Login
  const [ocultoSignIn, setOcultoSignIn] = useState(false);
  const [ocultoLogin, setOcultoLogin] = useState(true);

  // Estados de mensajes para Registrarse y Login
  const [ocultoSignInMensaje, setOcultoSignInMensaje] = useState(true);
  const [ocultoLoginMensaje, setOcultoLoginMensaje] = useState(true);

  //Al modificarse el input, actualiza el valor de la variable "user SignIn"
  const updateUserSignIn = (evento) => {
    setUserSignIn(evento.target.value);
  };

  //Al modificarse el input, actualiza el valor de la variable "pass SignIn"
  const updatePassSignIn = (evento) => {
    setPassSignIn(evento.target.value);
  };

  //Al modificarse el input, actualiza el valor de la variable "user LogIn"
  const updateUserLogin = (evento) => {
    setUserLogin(evento.target.value);
  };

  //Al modificarse el input, actualiza el valor de la variable "pass LogIn"
  const updatePassLogin = (evento) => {
    setPassLogin(evento.target.value);
  };

  const registrarse = () => {
    // Guardamos el usuario y pass
    setSavedUser(userSignIn);
    setSavedPass(passSignIn);
    setUserSignIn("");
    setPassSignIn("");
    setOcultoSignInMensaje(false);
  };

  const loguearse = () => {
    // Validamos que el usuario de login ingresado sea igual al user registrado
    if (savedUser === userLogin && savedPass === passLogin) {
      setOcultoLoginMensaje(false);
      setUserLogin("");
      setPassLogin("");
    }
  };

  // Cambiar los input y botones a opciones de "Login"
  const login = () => {
    // Eliminamos los botones de SignIn y mostramos los de Login
    setOcultoSignIn(true);
    setOcultoLogin(false);
    setOcultoSignInMensaje(true);
    setUserLogin("");
    setPassLogin("");
  };

  // Cambiar los input y botones a opciones de "SignIn"
  const signIn = () => {
    setOcultoSignIn(false);
    setOcultoLogin(true);
    setOcultoLoginMensaje(true);
    setUserSignIn("");
    setPassSignIn("");
  };

  return (
    <div className="App">
      <p> Ejercicio Login</p>
      <br />
      <br />
      <button onClick={signIn} disabled={false}>
        SignIn
      </button>
      <button onClick={login} disabled={false}>
        Login
      </button>
      <br />
      <br />
      <input
        value={userSignIn}
        onChange={(evento) => updateUserSignIn(evento)}
        placeholder="New User"
        id="idUserSignIn"
        hidden={ocultoSignIn}
      />
      <input
        value={passSignIn}
        onChange={(evento) => updatePassSignIn(evento)}
        placeholder="New Pass"
        id="idPassSignIn"
        hidden={ocultoSignIn}
      />
      <input
        value={userLogin}
        onChange={(evento) => updateUserLogin(evento)}
        placeholder="Login User"
        id="idUserLogin"
        hidden={ocultoLogin}
      />
      <input
        value={passLogin}
        onChange={(evento) => updatePassLogin(evento)}
        placeholder="Login Pass"
        id="idPassLogin"
        hidden={ocultoLogin}
      />
      <br />
      <br />
      <button onClick={registrarse} id="botonRegistrarse" hidden={ocultoSignIn}>
        Registrarse
      </button>
      <button onClick={loguearse} id="botonLoguearse" hidden={ocultoLogin}>
        Loguearse
      </button>
      <p id="mensajeRegistrado" hidden={ocultoSignInMensaje}>
        Registro satisfactorio
      </p>
      <p id="mensajeLogin" hidden={ocultoLoginMensaje}>
        Ingreso satisfactorio
      </p>
    </div>
  );
}
