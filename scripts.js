let products = [];
let total = 0;

function add(producto, precio) {
    console.log(producto, precio);
    products.push(producto);
    total = total + precio;
    document.getElementById("checkout").innerHTML = `Total $${total}`
}

function pay() {
    window.alert(products.join("\n"));
}

//Desafio 6
/*
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
*/


const divProductos = document.getElementById("compra")
divProductos.innerHTML += `
    <div>
        <button id="checkout" class="button" onclick="pay()">Total a pagar</button>
    </div>
    `

const boton1 = document.getElementById("boton1")
boton1.onclick = () => add('Compu1 $', 15000)

const boton2 = document.getElementById("boton2")
boton2.onclick = () => add('Compu2 $', 20000)

const boton3 = document.getElementById("boton3")
boton3.onclick = () => add('Compu3 $', 28500)

const boton4 = document.getElementById("boton4")
boton4.onclick = () => add('Compu4 $', 35500)

const boton5 = document.getElementById("boton5")
boton5.onclick = () => add('Compu5 $', 42500)

const boton6 = document.getElementById("boton6")
boton6.onclick = () => add('Compu6 $', 55000)



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
