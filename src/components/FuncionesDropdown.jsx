// src/components/FuncionesDropdown.jsx
import React from 'react';
import {
  FaRoute, FaUsers, FaRegClock, FaMobileAlt,
  FaClipboardCheck, FaCommentAlt, FaExchangeAlt, FaTruck,
  FaProductHunt
} from 'react-icons/fa';

const funciones = [
  {
    icon: <FaProductHunt className="text-blue-500 text-2xl" />,
    title: 'Productos',
    description: 'Maximiza el número de pedidos realizados, mientras reduces costos',
    action: 'products', // Ruta
  }, 
];

export default function FuncionesDropdown({ isOpen, onNavigate }) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-md p-6 z-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {funciones.map((f, idx) => (
          <div
            key={idx}
            className="flex items-start space-x-4 cursor-pointer"
            onClick={() => onNavigate(f.action)}
          >
            <div>{f.icon}</div>
            <div>
              <h4 className="font-bold text-sm">{f.title}</h4>
              <p className="text-xs text-gray-600">{f.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button
          onClick={() => onNavigate('products')}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded"
        >
          Ver todas las funciones →
        </button>
      </div>
    </div>
  );
}

 // {
  //   icon: <FaRoute className="text-blue-500 text-2xl" />,
  //   title: 'Planificación Automatizada',
  //   description: 'Maximiza el número de pedidos realizados, mientras reduces costos',
  // },
  // {
  //   icon: <FaUsers className="text-blue-500 text-2xl" />,
  //   title: 'Conductor y Vehículo',
  //   description: 'Considera habilidades de los conductores, costos y capacidades',
  // },
  // {
  //   icon: <FaRegClock className="text-blue-500 text-2xl" />,
  //   title: 'Seguimiento en Tiempo Real',
  //   description: 'Notificaciones ETA y estado del pedido a los clientes',
  // },
  // {
  //   icon: <FaMobileAlt className="text-blue-500 text-2xl" />,
  //   title: 'App para Conductores',
  //   description: 'Recibe rutas y actualizaciones en tiempo real',
  // },
  // {
  //   icon: <FaClipboardCheck className="text-blue-500 text-2xl" />,
  //   title: 'Prueba de Entrega',
  //   description: 'Captura firmas, fotos y crea formularios',
  // },
  // {
  //   icon: <FaCommentAlt className="text-blue-500 text-2xl" />,
  //   title: 'Feedback del Cliente',
  //   description: 'Recoge y analiza opiniones al finalizar',
  // },
  // {
  //   icon: <FaExchangeAlt className="text-blue-500 text-2xl" />,
  //   title: 'Modificación en Tiempo Real',
  //   description: 'Reacciona a cambios de último minuto',
  // },
  // {
  //   icon: <FaTruck className="text-blue-500 text-2xl" />,
  //   title: 'Camiones y Materiales Peligrosos',
  //   description: 'Optimiza rutas para cargas peligrosas',
  // },