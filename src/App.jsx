import { useState } from 'react';
import './App.css';
import FuncionesDropdown from './components/FuncionesDropdown';
import { useNavigate, Routes, Route } from 'react-router-dom';
import {Index} from './pages/Index';
import Products from './pages/Products';

function App() {
  const [showFunciones, setShowFunciones] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative">
      <nav className="bg-blue-900 text-white px-6 py-3 flex justify-between items-center">
        <div className="font-bold text-xl">Agua-Crystal</div>
        <div className="space-x-4">
          <button
            onClick={() => navigate('/')}
            className="bg-white text-black px-4 py-2 rounded hover:bg-yellow-300"
          >
            Inicio
          </button>
          <button
            onClick={() => setShowFunciones(!showFunciones)}
            className="bg-white text-black px-4 py-2 rounded hover:bg-yellow-300"
          >
            Ver Más...
          </button>         
          <button className="bg-orange-500 px-4 py-2 rounded hover:bg-yellow-300">
            Iniciar sesión
          </button>
          <button className="bg-red-500 px-4 py-2 rounded hover:bg-yellow-300">
            Registrar
          </button>
        </div>
      </nav>

      {showFunciones && (
        <div className="relative z-50">
          <FuncionesDropdown
            isOpen={showFunciones}
            onNavigate={() => navigate('/products')}
          />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
