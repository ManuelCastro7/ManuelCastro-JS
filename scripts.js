//Desafio 5

/*let repetir = true

let nombre = prompt("Ingrese su nombre.").toLowerCase(); 

while (repetir) {
    let edad = parseFloat(prompt("Ingrese su edad."))
    
    if (edad >= 18){
        break
    }
    else if(edad <=17){
        alert("Sos menor de edad.")
    }
}

 const usuario = document.getElementById("usuario")
 usuario.innerText = `Hola ${nombre}, aqui tiene las mejores computadoras para vos`
*/
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

const divProductos = document.getElementById("divProductos")

computadoras.forEach(producto => {
    divProductos.innerHTML += `
    <div class="cards">
        <h3 class="card">Procesador: ${producto.procesador}</h3>
        <h3 class="card">Ram: ${producto.ram}</h3>
        <h3 class="card">Almacenamiento: ${producto.almacenamiento}</h3>
        <h3 class="card">OS: ${producto.os}</h3>
        <h3 class="card">Precio: ${producto.precio}</h3>
        <button class="comprar" id="boton1">Comprar</button>
    </div>
    `
})

boton1.addEventListener('click', () => {
    alert("¿Estas seguro?")
})