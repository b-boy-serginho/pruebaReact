// src/pages/Products.jsx
import React from 'react';
import { useFetchProduct } from '../hooks/useFetchProduct';

export default function Products() {
  const {productList, loading} = useFetchProduct();

  console.log("Lista de productos", productList)
  if(loading) return <p> Cargando los productos...</p>;

  return (
    <div className="min-h-screen bg-white py-10 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Nuestros Productos</h2>
      <p className="text-gray-500 mb-8 italic">El agua es vida</p>

      <div className="space-y-6">
        {productList.map((producto, id) => (
          <div
            key={id}
            className="flex flex-col md:flex-row items-center bg-gray-200 border border-gray-200 rounded shadow-sm overflow-hidden"
           >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full md:w-40 h-40 object-contain p-2"
            />
            <div className="flex-1 px-6 py-4 text-left">
              <h3 className="text-xl font-semibold text-gray-800">{producto.nombre}</h3>
              <p className="text-gray-600 text-sm mt-1">{producto.descripcion}</p>
              <button className="mt-4 px-4 py-2 border border-gray-700 rounded hover:bg-yellow-400 text-sm bg-blue-900 text-white">
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Paginación */}
      <div className="flex justify-center items-center mt-10 text-sm text-gray-700">
        <button className="px-3 py-1 hover:text-blue-600">&larr; Previous</button>
        <div className="flex space-x-2 mx-4">
          <button className="px-3 py-1 rounded bg-blue-600 text-white">1</button>
          <button className="px-3 py-1 rounded hover:bg-gray-200">2</button>
          <button className="px-3 py-1 rounded hover:bg-gray-200">3</button>
          <span className="px-2">...</span>
          <button className="px-3 py-1 rounded hover:bg-gray-200">67</button>
          <button className="px-3 py-1 rounded hover:bg-gray-200">68</button>
        </div>
        <button className="px-3 py-1 hover:text-blue-600">Next &rarr;</button>
      </div>
    </div>
  );
}


// {productos.map((producto, idx) => (
const productos = [
  {
    nombre: 'Botellon 20 lts',
    descripcion: 'Agua purificada en botellón ideal para hogares y oficinas.',
    imagen: 'https://i.imgur.com/T1NTAd6.png', // Reemplaza por tu ruta local si tienes la imagen
  },
  {
    nombre: 'Paquete personal de tapita',
    descripcion: 'Paquete con botellas personales, perfectas para llevar.',
    imagen: 'https://i.imgur.com/xI1KHGo.png',
  },
  {
    nombre: 'Paquete personal de pico',
    descripcion: 'Botellas con pico ideales para deporte o actividades al aire libre.',
    imagen: 'https://i.imgur.com/cTfwnOG.png',
  },
];
