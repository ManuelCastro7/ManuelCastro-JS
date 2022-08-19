// Desafio de librerias
document.addEventListener('DOMContentLoaded', () => {

  const baseDeDatos = [{
      id: 1,
      nombre: "Intel i3",
      caracteriticas: "2 nucleos, 4 hilos",
      precio: 5000,
      imagen: "/img/proce1.jfif"
    },
    {
      id: 2,
      nombre: "Intel I5",
      caracteriticas: "4 nucleos 4 hilos",
      precio: 10000,
      imagen: "/img/proce2.jfif"
    },
    {
      id: 3,
      nombre: "Intel I7",
      caracteriticas: "4 nucleos 8 hilos",
      precio: 15000,
      imagen: "/img/proce3.jfif"
    },
    {
      id: 4,
      nombre: "Ram 2gb",
      caracteriticas: "ddr4 1600mhz",
      precio: 4000,
      imagen: "/img/ram.jpg"
    },
    {
      id: 5,
      nombre: "Ram 4gb",
      caracteriticas: "ddr4 2600mhz",
      precio: 6000,
      imagen: "/img/ram.jpg"
    },
    {
      id: 6,
      nombre: "Ram 8gb",
      caracteriticas: "ddr4 3600mhz",
      precio: 8000,
      imagen: "/img/ram.jpg"
    }

  ];

  let carrito = [];
  const divisa = '$';
  const DOMitems = document.querySelector('#items');
  const DOMcarrito = document.querySelector('#carrito');
  const DOMtotal = document.querySelector('#total');
  const DOMbotonVaciar = document.querySelector('#boton-vaciar');
  const miLocalStorage = window.localStorage;

  function renderizarProductos() {
    baseDeDatos.forEach((info) => {
      // Estructura
      const miNodo = document.createElement('div');
      miNodo.classList.add('card', 'col-sm-3');
      // Body
      const miNodoCardBody = document.createElement('div');
      miNodoCardBody.classList.add('card-body');
      // Titulo
      const miNodoTitulo = document.createElement('h3');
      miNodoTitulo.classList.add('card-title');
      miNodoTitulo.textContent = info.nombre;
      // Caracteristicas
      const miNodoCaracteristica = document.createElement('h5');
      miNodoCaracteristica.classList.add('card-title');
      miNodoCaracteristica.textContent = info.caracteriticas;
      // Imagen
      const miNodoImagen = document.createElement('img');
      miNodoImagen.classList.add('img-fluid');
      miNodoImagen.setAttribute('src', info.imagen);
      // Precio
      const miNodoPrecio = document.createElement('h5');
      miNodoPrecio.classList.add('card-text');
      miNodoPrecio.textContent = `${divisa}${info.precio}`;
      // Boton 
      const miNodoBoton = document.createElement('button');
      miNodoBoton.classList.add('boton');
      miNodoBoton.textContent = 'Agregar';
      miNodoBoton.setAttribute('marcador', info.id);
      miNodoBoton.addEventListener('click', aniadirProductoAlCarrito);
      // Insertamos
      miNodoCardBody.appendChild(miNodoImagen);
      miNodoCardBody.appendChild(miNodoTitulo);
      miNodoCardBody.appendChild(miNodoCaracteristica);
      miNodoCardBody.appendChild(miNodoPrecio);
      miNodoCardBody.appendChild(miNodoBoton);
      miNodo.appendChild(miNodoCardBody);
      DOMitems.appendChild(miNodo);
    });
  }

  // Añadir un producto al carrito
  function aniadirProductoAlCarrito(evento) {
    carrito.push(evento.target.getAttribute('marcador'))
    renderizarCarrito();
    guardarCarritoEnLocalStorage();
  }

  function renderizarCarrito() {
    DOMcarrito.textContent = '';
    const carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((item) => {
      const miItem = baseDeDatos.filter((itemBaseDatos) => {
        return itemBaseDatos.id === parseInt(item);
      });

      const numeroUnidadesItem = carrito.reduce((total, itemId) => {
        return itemId === item ? total += 1 : total;
      }, 0);

      const miNodo = document.createElement('li');
      miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
      miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${divisa}${miItem[0].precio}`

      // Boton de borrar
      const miBoton = document.createElement('button');
      miBoton.classList.add('btn', 'btn-danger', 'mx-5');
      miBoton.textContent = 'X';
      miBoton.style.marginLeft = '1rem';
      miBoton.dataset.item = item;
      miBoton.addEventListener('click', borrarItemCarrito);
      miNodo.appendChild(miBoton);
      DOMcarrito.appendChild(miNodo);
    });
    DOMtotal.textContent = calcularTotal();
  }

  // Eliminar un producto del carrito
  function borrarItemCarrito(evento) {
    const id = evento.target.dataset.item;
    // Eliminar todos los productos
    carrito = carrito.filter((carritoId) => {
      return carritoId !== id;
    });
    renderizarCarrito();
    guardarCarritoEnLocalStorage();

  }

  // Calcula el precio total
  function calcularTotal() {
    return carrito.reduce((total, item) => {
      const miItem = baseDeDatos.filter((itemBaseDatos) => {
        return itemBaseDatos.id === parseInt(item);
      });
      return total + miItem[0].precio;
    }, 0).toFixed(2);
  }

  function vaciarCarrito() {
    carrito = [];
    renderizarCarrito();
    localStorage.clear();
  }

  function guardarCarritoEnLocalStorage() {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
  }

  function cargarCarritoDeLocalStorage() {
    if (miLocalStorage.getItem('carrito') !== null) {
      carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
  }

  DOMbotonVaciar.addEventListener('click', vaciarCarrito);

  cargarCarritoDeLocalStorage();
  renderizarProductos();
  renderizarCarrito();
});

const botonComprar = document.getElementById("botonComprar")
botonComprar.addEventListener("click" , () => {
  Swal.fire(
    '¡Felicidades!',
    'Compra finalizada.',
    'success' 
  )
})


//Formulario extraido de Developer Mozilla
const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const para = document.querySelector('h6');

form.addEventListener('submit', (e) => {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    const boton = document.getElementById("boton")
    boton.addEventListener("click" , () => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, llene los dos campos',
      })
    });
  }
});


