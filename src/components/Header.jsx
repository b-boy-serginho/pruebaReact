// src/components/Header.jsx
import { useState } from 'react';
import FuncionesMenu from './FuncionesMenu';

export default function Header() {
  const [mostrarFunciones, setMostrarFunciones] = useState(false);

  return (
    <header className="bg-blue-900 text-white flex justify-between px-6 py-4">
      <h1 className="text-xl font-bold">OptimoRoute</h1>

      <nav className="flex gap-6">
        <button
          onClick={() => setMostrarFunciones(!mostrarFunciones)}
          className="hover:underline"
        >
          Funciones
        </button>
      </nav>

      {mostrarFunciones && <FuncionesMenu />}
    </header>
  );
}
