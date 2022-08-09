let products = [];
let total = 0;

function add(producto, precio) {
    console.log(producto, precio);
    products.push(producto);
    total = total + precio;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}

function pay() {
    window.alert(products.join(", \n"));
}

//Desafio 6

class Computadora{
    constructor(precio, procesador, ram, almacenamiento, os){
        this.procesador = procesador;
        this.ram = ram;
        this.almacenamiento = almacenamiento;
        this.os = os;
        this.precio = precio;
    }
}

//le agrego caracteristicas a cada computadora y luego lo muestro a traves de la consola...
const computadora1 = new Computadora("15000", "Intel core2 2.40ghz", "2gb ddr3", "240gb hdd", "Windows 7");
const computadora2 = new Computadora("20000", "AMD athlon 3.0ghz", "4gb ddr3", "500gb hdd", "Windows 8");
const computadora3 = new Computadora("28500", "Intel core i3 3.30ghz", "8gb ddr3", "240gb ssd", "Windows 10");
const computadora4 = new Computadora("35500", "Intel core i5 4.1ghz", "8gb ddr3", "240gb sdd", "Windows 10");
const computadora5 = new Computadora("42500", "AMD Ryzen3 4.0ghz", "8gb ddr4", "500gb ssd", "Windows 10");
const computadora6 = new Computadora("55000", "AMD Ryzen5 4.2ghz", "16gb ddr4", "500gb sdd", "Windows 11");
const computadoras = [computadora1, computadora2, computadora3, computadora4, computadora5, computadora6]

boton1.addEventListener('click', () => {
    window.alert(computadora1)
})
boton2.addEventListener('click', () => {
    console.table(computadora2)
})
boton3.addEventListener('click', () => {
    console.table(computadora3)
})
boton4.addEventListener('click', () => {
    console.table(computadora4)
})
boton5.addEventListener('click', () => {
    console.table(computadora5)
})
boton6.addEventListener('click', () => {
    console.table(computadora6)
})

let repetir = true
let nombre = prompt("Ingrese su nombre.").toLowerCase(); 
const usuario = document.getElementById("usuario")
usuario.innerText = `Hola ${nombre}, aqui tiene las mejores computadoras para vos`


//Formulario extraido de Developer Mozilla
const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const para = document.querySelector('p');

form.addEventListener('submit', (e) => {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'Complete los dos campos';
  }
});
