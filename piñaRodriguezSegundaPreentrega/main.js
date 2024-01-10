// Función para crear un hotel
function crearHotel(nombre, categoria, habitacionesDisponibles, ubicacion) {
  return {
      nombre: nombre,
      categoria: categoria,
      habitacionesDisponibles: habitacionesDisponibles,
      ubicacion: ubicacion
  };
}

// Lista de hoteles en San Gil Santander
let hotelesSanGil = [
  crearHotel('Hotel Campestre La Montana', '5 estrellas', 20, 'Zona rural'),
  crearHotel('Hotel Terrazas de la Candelaria', '4 estrellas', 15, 'Centro histórico'),
  crearHotel('Hotel Boutique Wassiki Campestre', '3 estrellas', 30, 'A las afueras'),
  crearHotel('Hotel Castillo Resort', '4 estrellas', 25, 'Centro'),
  crearHotel('Hotel Campestre Casa del Marquez', '3 estrellas', 18, 'Zona rural'),
  crearHotel('Hotel San Gil Plaza', '2 estrellas', 12, 'Centro histórico'),
  crearHotel('Hotel La Posada de Cacique', '3 estrellas', 22, 'A las afueras'),
  crearHotel('Hotel Monchuelo Spa', '4 estrellas', 28, 'Zona rural'),
  crearHotel('Hotel Terrazas de la Playa', '2 estrellas', 10, 'Centro'),
  crearHotel('Hotel Campestre El Refugio', '3 estrellas', 16, 'A las afueras')
];

// Función para buscar un hotel por nombre
function buscarPorNombre(nombre) {
  return hotelesSanGil.find(hotel => hotel.nombre.toLowerCase() === nombre.toLowerCase());
}

// Función para buscar hoteles por categoría
function filtrarPorCategoria(categoria) {
  return hotelesSanGil.filter(hotel => hotel.categoria.toLowerCase() === categoria.toLowerCase());
}

// Bucle
let continuar = true;

while (continuar) {
  let opcion = prompt(`Elige una opción:\n1. Buscar hotel por nombre\n2. Filtrar hoteles por categoría\n3. Salir`);

  switch (opcion) {
      case '1':
          let nombreBusqueda = prompt('Ingresa el nombre del hotel que quieres buscar:');
          const hotelEncontrado = buscarPorNombre(nombreBusqueda);
          if (hotelEncontrado) {
              alert(`Información del hotel encontrado:\nNombre: ${hotelEncontrado.nombre}\nCategoría: ${hotelEncontrado.categoria}\nHabitaciones disponibles: ${hotelEncontrado.habitacionesDisponibles}\nUbicación: ${hotelEncontrado.ubicacion}`);
          } else {
              alert(`El hotel con nombre "${nombreBusqueda}" no fue encontrado.`);
          }
          break;
      case '2':
          let categoriaFiltrado = prompt('Ingresa la categoría de los hoteles que quieres filtrar:');
          const hotelesFiltrados = filtrarPorCategoria(categoriaFiltrado);
          if (hotelesFiltrados.length > 0) {
              let mensaje = `Hoteles de categoría "${categoriaFiltrado}":\n`;
              hotelesFiltrados.forEach(hotel => {
                  mensaje += `\nNombre: ${hotel.nombre}\nCategoría: ${hotel.categoria}\nHabitaciones disponibles: ${hotel.habitacionesDisponibles}\nUbicación: ${hotel.ubicacion}\n`;
              });
              alert(mensaje);
          } else {
              alert(`No se encontraron hoteles de la categoría "${categoriaFiltrado}".`);
          }
          break;
      case '3':
          continuar = false;
          break;
      default:
          alert('Opción no válida. Por favor, elige una opción válida.');
  }
}
