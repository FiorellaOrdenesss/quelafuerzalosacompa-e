export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="border-b border-purple-800/30 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-purple-600 p-3 rounded">📦</div>
              <div>
                <p className="font-bold">Te lo enviamos Gratis</p>
                <p className="text-sm text-gray-400">
                  En compras mayores a $1000
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-purple-600 p-3 rounded">🛡️</div>
              <div>
                <p className="font-bold">Tu compra super Segura</p>
                <p className="text-sm text-gray-400">Protección garantizada</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-purple-600 p-3 rounded">💳</div>
              <div>
                <p className="font-bold">Pago Flexible</p>
                <p className="text-sm text-gray-400">
                  Hasta 12 cuotas sin interés
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-purple-600 p-3 rounded">☎️</div>
              <div>
                <p className="font-bold">Ofrecemos soporte 24/7</p>
                <p className="text-sm text-gray-400">Siempre disponibles</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-purple-600 p-2 rounded">⭐</div>
              <h2 className="text-xl font-bold">YFL</h2>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Lo último en tecnología al alcance de tu mano.
            </p>
            <p className="font-bold mb-2">Suscribete a nuestro Newsletter</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 bg-gray-700 rounded px-3 py-2 text-sm text-white placeholder-gray-500"
              />
              <button className="bg-purple-600 hover:bg-purple-700 rounded px-3 py-2">
                ➤
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 border-l-2 border-purple-600 pl-2">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Productos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Ofertas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Sobre Nosotros
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 border-l-2 border-purple-600 pl-2">
              Soporte
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Devoluciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Garantía
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacidad
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 border-l-2 border-purple-600 pl-2">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📍 Av. Ánima 2026, Uruguay</li>
              <li>📞 +598 99 000 000</li>
              <li>📧 yfl@techstore.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>
            © 2026 YFL Ánima - Finest - DesarrolloWebFullStack - Todos los
            derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              Términos de Uso
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white">
              Política de Privacidad
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
          <p>Hecho con mucho ❤️ en Uruguay</p>
        </div>
      </div>
    </footer>
  );
}
