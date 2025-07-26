// src/components/Footer.jsx

// Puedes poner esto al final de tu componente Index.jsx o separarlo en Footer.jsx
function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sección 1: Logo o nombre de la empresa */}
        <div>
          <h3 className="text-xl font-bold mb-2">Agua Purificada SC</h3>
          <p className="text-sm text-gray-300">
            Distribuyendo salud y bienestar en cada gota. Servicio confiable en Santa Cruz de la Sierra.
          </p>
        </div>

        {/* Sección 2: Enlaces rápidos */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Enlaces</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-400 transition">Inicio</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Nosotros</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Productos</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Contacto</a></li>
          </ul>
        </div>

        {/* Sección 3: Contacto */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contáctanos</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>📍 Santa Cruz de la Sierra, Bolivia</li>
            <li>📞 +591 74921968</li>
            <li>✉️ agua_crystal@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Agua Purificada SC. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
