function crearHotel(nombre, categoria, habitacionesDisponibles, ubicacion) {
    return {
      nombre: nombre,
      categoria: categoria,
      habitacionesDisponibles: habitacionesDisponibles,
      ubicacion: ubicacion
    };
  }
  
  let hotelesSanGil = JSON.parse(localStorage.getItem('hoteles')) || [];
  
  if (hotelesSanGil.length === 0) {
    hotelesSanGil = [
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
    // Guardar la lista de hoteles en el almacenamiento local
    localStorage.setItem('hoteles', JSON.stringify(hotelesSanGil));
  }
  
  function buscarPorNombre(nombre) {
    return hotelesSanGil.find(hotel => hotel.nombre.toLowerCase() === nombre.toLowerCase());
  }
  
  function filtrarPorCategoria(categoria) {
    return hotelesSanGil.filter(hotel => hotel.categoria.toLowerCase() === categoria.toLowerCase());
  }
  
  const form = document.querySelector('form');
  const searchInput = document.querySelector('.form-control');
  const resultsContainer = document.createElement('div');
  resultsContainer.classList.add('results-container');
  document.body.appendChild(resultsContainer);
  
  const RESULT_CONTAINER_CLASS = 'results-container';
  const SEARCH_FORM_SELECTOR = 'form';
  const SEARCH_INPUT_SELECTOR = '.form-control';
  
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const nombreBusqueda = searchInput.value.trim();
    realizarBusqueda(nombreBusqueda);
  });
  
  function realizarBusqueda(nombreBusqueda) {
    resultsContainer.innerHTML = '';
  
    const hotelEncontrado = buscarPorNombre(nombreBusqueda);
  
    if (hotelEncontrado) {
      const card = document.createElement('div');
      card.classList.add('card', 'm-3');
      card.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${hotelEncontrado.nombre}</h5>
          <p class="card-text">Categoría: ${hotelEncontrado.categoria}</p>
          <p class="card-text">Habitaciones disponibles: ${hotelEncontrado.habitacionesDisponibles}</p>
          <p class="card-text">Ubicación: ${hotelEncontrado.ubicacion}</p>
        </div>
      `;
      resultsContainer.appendChild(card);
    } else {
      // Mostrar mensaje si el hotel no fue encontrado
      const mensajeError = document.createElement('p');
      mensajeError.textContent = `El hotel con nombre "${nombreBusqueda}" no fue encontrado.`;
      resultsContainer.appendChild(mensajeError);
    }
  }
  