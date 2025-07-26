// src/pages/Index.jsx
import mockup from '../assets/img3.avif';
import Footer from '../components/Footer.jsx';

export function Index() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-600 text-white">
        <section className="px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <span className="text-sm">4.7 (207 reseñas)</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight mb-4">
              Brindar agua purificada de la más alta calidad
            </h1>
            <p className="mb-6 text-lg">
              Servicio eficiente, confiable y con atención personalizada.
            </p>
            <div className="flex items-center bg-white rounded overflow-hidden max-w-md">
              <input
                type="email"
                // placeholder="Correo electrónico"
                className="flex-grow px-4 py-2 text-black focus:outline-none"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 text-white font-semibold">
                Ingresar
              </button>
            </div>
            {/* <p className="text-xs mt-2">No se requiere tarjeta de crédito.</p> */}

            <div className="mt-6 flex space-x-4 text-sm">
              {/* <span className="bg-white/10 px-3 py-1 rounded border border-white/20">Entrega</span>
            <span className="bg-white/10 px-3 py-1 rounded border border-white/20">Servicio de Campo</span>
            <span className="bg-white/10 px-3 py-1 rounded border border-white/20">Logística comercial</span> */}
            </div>
          </div>
          <div className="flex justify-center items-center relative">
            <img
              src={mockup}
              alt="Mockup del sistema"
              className="w-full max-w-xl rounded shadow-lg"
            />
          </div>
        </section>
      </div>

      <section className="bg-white px-8 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Acerca de nosotros
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          La empresa ofrece agua purificada en botellones, botellas y bolsas, además de dispensadores.
          Se atienden pedidos al por mayor y menor, con servicio de entrega a domicilio dentro del área departamental.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Misión */}
          <div className="border border-gray-300 rounded-lg p-6 bg-white shadow">
            <div className="flex items-start mb-4">
              <svg className="w-6 h-6 text-black mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
              </svg>
              <div>
                <h3 className="text-xl font-semibold mb-1">Misión</h3>
                <p className="text-gray-700">
                  Brindar agua purificada de la más alta calidad en diversas presentaciones, garantizando salud,
                  bienestar e hidratación accesible para hogares, empresas y comercios en todo el departamento de Santa Cruz
                  de la Sierra, a través de un servicio eficiente, confiable y con atención personalizada.
                </p>
              </div>
            </div>
          </div>

          {/* Visión */}
          <div className="border border-gray-300 rounded-lg p-6 bg-white shadow">
            <div className="flex items-start mb-4">
              <svg className="w-6 h-6 text-black mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
              </svg>
              <div>
                <h3 className="text-xl font-semibold mb-1">Visión</h3>
                <p className="text-gray-700">
                  Ser la empresa líder en distribución de agua purificada en Bolivia, reconocida por su excelencia en el
                  servicio, compromiso con la salud de sus clientes y el uso de tecnología para facilitar el acceso a productos
                  esenciales de forma rápida, económica y sostenible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </>
  );
}
