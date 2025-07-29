import { useState } from 'react';
import './App.css';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { Index } from './pages/Index';
import Products from './pages/Products';
import FuncionesDropdown from './components/FuncionesDropdown';
import { FaBars } from 'react-icons/fa';
import LoginPage from './pages/LoginPage';

function App() {
  const [showFunciones, setShowFunciones] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative">
      <nav className="bg-blue-900 text-white px-6 py-3 flex justify-between items-center">
        <div className="font-bold text-xl">Agua-Crystal</div>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          <FaBars />
        </button>

        {/* Menú de navegación */}
        <div className="hidden md:flex space-x-4">
          <button
            onClick={() => navigate('/')}
            className=" text-white px-4 py-2 rounded hover:bg-yellow-300 font-bold"  //bg-white text-black  text-white 
          >
            Inicio
          </button>
          <button
            onClick={() => setShowFunciones(!showFunciones)}
            className=" text-white px-4 py-2 rounded hover:bg-yellow-300 font-bold" //bg-white
          >
            Ver Más...
          </button>
          <button 
            onClick={() => navigate('/')}
            className=" text-white px-4 py-2 rounded hover:bg-yellow-300 font-bold" //bg-white 
          > 
            Iniciar sesión
          </button>
          <button className="bg-red-500 px-4 py-2 rounded hover:bg-yellow-300">
            Crear Cuenta
          </button>
        </div>
      </nav>

      {/* Menú hamburguesa (visible solo en móviles) */}
      {menuOpen && (
        <div className="flex flex-col space-y-2 bg-blue-800 p-4 md:hidden z-50">
          <button
            onClick={() => {
              navigate('/');
              setMenuOpen(false);
            }}
            className=" text-black px-4 py-2 rounded hover:bg-yellow-300 text-white font-bold" //bg-white
          >
            Inicio
          </button>
          <button
            onClick={() => {
              setShowFunciones(!showFunciones);
              // no cerramos menuOpen aquí para que se vea el dropdown
            }}
            className=" text-white px-4 py-2 rounded hover:bg-yellow-300 text-white font-bold" //bg-gray-700
          >
            Ver Más...
          </button>
          <button 
            onClick={() => {
              navigate('/');
            }}
          className=" px-4 py-2 rounded hover:bg-yellow-300 text-white font-bold"  /*bg-orange-500*/ >
            Iniciar sesión
          </button>
          <button className="bg-red-500 px-4 py-2 rounded hover:bg-yellow-300 text-white">
            Crear cuenta
          </button>
        </div>
      )}

      {/* Dropdown de funciones */}
      {showFunciones && (
        <div className="relative z-50">
          <FuncionesDropdown
            isOpen={showFunciones}
            onNavigate={(ruta) => {
              navigate(`/${ruta}`);
              setShowFunciones(false);
              setMenuOpen(false);
            }}
          />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
