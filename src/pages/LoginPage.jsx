// LoginPage.jsx
import React, { useState } from "react";
import { login } from "../services/auth";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = await login(username, password);
      console.log("Login exitoso:", userData);
      // redirige, muestra dashboard, etc.
    } catch (err) {
      setErrorMsg("Credenciales incorrectas o usuario bloqueado");
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4 max-w-sm mx-auto mt-10">
      <input
        type="text"
        value={username}
        placeholder="Usuario"
        onChange={(e) => setUsername(e.target.value)}
        className="w-full border px-3 py-2"
      />
      <input
        type="password"
        value={password}
        placeholder="Contraseña"
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border px-3 py-2"
      />
      {errorMsg && <p className="text-red-500">{errorMsg}</p>}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Iniciar sesión
      </button>
    </form>
  );
}

export default LoginPage;
