// src/components/FuncionesMenu.jsx
export default function FuncionesMenu() {
  const funciones = [
    {
      titulo: 'Planificación Automatizada',
      texto: 'Maximiza el número de pedidos realizados, mientras reduces costos',
      icono: '⚙️',
    },
    {
      titulo: 'Seguimiento de Pedidos en Tiempo Real',
      texto: 'Envía notificaciones personalizables de ETA y estado del pedido a los clientes',
      icono: '📍',
    },
    {
      titulo: 'Retroalimentación del Cliente',
      texto: 'Recoge y analiza opiniones de los clientes al completar el trabajo',
      icono: '💬',
    },
    {
      titulo: 'Conductor y Vehículo',
      texto: 'Considera habilidades de los conductores, costos y capacidades de los vehículos',
      icono: '🚗',
    },
    {
      titulo: 'Aplicación Móvil para Conductores',
      texto: 'Envía rutas directamente a los conductores y recibe actualizaciones',
      icono: '📱',
    },
    {
      titulo: 'Modificación de Ruta en Tiempo Real',
      texto: 'Reacciona a cambios de ruta de último minuto con Arrastrar y Soltar Inteligente',
      icono: '🔁',
    },
    {
      titulo: 'Pedido y Tarea',
      texto: 'Añade prioridades, ventanas de tiempo, duración, habilidades y más',
      icono: '📝',
    },
    {
      titulo: 'Prueba de Entrega',
      texto: 'Captura firmas digitales, fotos y crea formularios personalizados',
      icono: '✍️',
    },
    {
      titulo: 'Rutas para Camiones y Materiales Peligrosos',
      texto: 'Optimiza rutas para camiones grandes y materiales peligrosos',
      icono: '🚚',
    },
  ];

  return (
    <div className="bg-blue-50 text-black px-10 py-8 grid grid-cols-3 gap-6">
      {funciones.map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="text-3xl">{item.icono}</div>
          <div>
            <h3 className="font-bold">{item.titulo}</h3>
            <p className="text-sm">{item.texto}</p>
          </div>
        </div>
      ))}
      <div className="col-span-3 flex justify-center mt-6">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full">
          Ver todas las funciones →
        </button>
      </div>
    </div>
  );
}
