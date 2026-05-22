import { ShoppingCart } from "lucide-react";

export function Cards() {
  const productos = [
    {
      id: 1,
      nombre: "Smartphone Pro",
      descripcion: "El dispositivo más avanzado con cámara de 108MP y 5G",
      precio: "$999",
      precioAnterior: "$1299",
      descuento: "-23%",
      etiqueta: "Más Vendido",
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: 2,
      nombre: "Laptop Ultra",
      descripcion: "Rendimiento excepcional para profesionales creativos",
      precio: "$1499",
      precioAnterior: "$1899",
      descuento: "-21%",
      etiqueta: "Nuevo",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      nombre: "Headphones Max",
      descripcion: "Sonido premium con cancelación de ruido activa",
      precio: "$349",
      precioAnterior: "$449",
      descuento: "-22%",
      etiqueta: "Ofertas",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      nombre: "Smartwatch Elite",
      descripcion: "Tu asistente personal en tu muñeca, siempre conectado",
      precio: "$449",
      precioAnterior: "$599",
      descuento: "-25%",
      etiqueta: "Tendencia",
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section className="bg-gray-100 min-h-screen py-12 text-center">
      <span className="bg-indigo-600 text-white text-sm px-4 py-1 rounded-full font-semibold">
        ⭐ Colección Premium
      </span>
      <h2 className="text-4xl font-extrabold text-indigo-700 mt-4">
        Productos Destacados
      </h2>
      <p className="text-gray-600 mt-2">
        Explora nuestra selección premium de tecnología con ofertas exclusivas
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-6">
        {productos.map((p) => (
          <div
            key={p.id}
            className={`relative bg-gradient-to-r ${p.color} text-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300`}
          >
            <div className="absolute top-3 left-3 bg-white/20 text-xs px-2 py-1 rounded-full">
              {p.descuento}
            </div>
            <div className="absolute top-3 right-3 bg-white/20 text-xs px-2 py-1 rounded-full">
              {p.etiqueta}
            </div>

            <h3 className="text-xl font-bold mt-8">{p.nombre}</h3>
            <p className="text-sm mt-2 text-white/90">{p.descripcion}</p>

            <div className="mt-4">
              <span className="text-2xl font-bold">{p.precio}</span>
              <span className="text-sm line-through ml-2 text-white/70">
                {p.precioAnterior}
              </span>
            </div>

            <button className="mt-6 w-full bg-white text-indigo-600 font-semibold py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-100 transition">
              <ShoppingCart size={18} /> Agregar al Carrito
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
