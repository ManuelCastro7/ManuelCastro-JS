//Primera entrega del proyecto final

let repetir = true

let nombre = prompt("Ingrese su nombre.").toLowerCase(); 

while (repetir) {
    let edad = parseFloat(prompt("Ingrese su edad."))
    
    if (edad >= 18){
        alert(`Bienvenido ${nombre}, a continuacion, vea nuestras compus.`)
        break
    }
    else if(edad <=17){
        alert("Sos menor de edad.")
    }
}

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
const computadora3 = new Computadora("28500", "Intel i3 3.30ghz", "8gb ddr3", "240gb ssd", "Windows 10");
const computadora4 = new Computadora("35500", "Intel i5 4.1ghz", "8gb ddr3", "240gb sdd", "Windows 10");
const computadora5 = new Computadora("42500", "AMD Ryzen3 4.0ghz", "8gb ddr4", "500gb ssd", "Windows 10");
const computadora6 = new Computadora("55000", "AMD Ryzen5 4.2ghz", "16gb ddr4", "500gb sdd", "Windows 11");

const computadoras = [computadora1, computadora2, computadora3, computadora4, computadora5, computadora6]

let seleccion = prompt("Selecciona un modelo para comprar : \n\n 1 - Intel core2 \n 2 - Intel i3 \n 3 - Intel i5 \n 4 - AMD Athlon \n 5 - AMD Ryzen3 \n 6 - AMD Ryzen5");

switch (seleccion) {
    case "1":
        console.log(computadoras.find(compusArray => compusArray.precio == 15000))

        function multiplicar(){
            let num1 = 15000
            let num2 = parseFloat(prompt("¿Cantidad para llevar?"));
            let resultado = num1 * num2;
            alert(`El costo total es : $${resultado}`)
        }
        multiplicar()
        break;
    case "2":
        console.log(computadoras.find(compusArray => compusArray.precio == 20000))

        function multiplicar(){
            let num1 = 20000
            let num2 = parseFloat(prompt("¿Cantidad para llevar?"));
            let resultado = num1 * num2;
            alert(`El costo total es : $${resultado}`)
        }
        multiplicar()
        break;
    case "3":
        console.log(computadoras.find(compusArray => compusArray.precio == 28500))

        function multiplicar(){
            let num1 = 28500
            let num2 = parseFloat(prompt("¿Cantidad para llevar?"));
            let resultado = num1 * num2;
            alert(`El costo total es : $${resultado}`)
        }
        multiplicar()
        break;
    case "4":
        console.log(computadoras.find(compusArray => compusArray.precio == 35500))

        function multiplicar(){
            let num1 = 35500
            let num2 = parseFloat(prompt("¿Cantidad para llevar?"));
            let resultado = num1 * num2;
            alert(`El costo total es : $${resultado}`)
        }
        multiplicar()
        break;
    case "5":
        console.log(computadoras.find(compusArray => compusArray.precio == 42500))

        function multiplicar(){
            let num1 = 42500
            let num2 = parseFloat(prompt("¿Cantidad para llevar?"));
            let resultado = num1 * num2;
            alert(`El costo total es : $${resultado}`)
        }
        multiplicar()
        break;
    case "6":
        console.log(computadoras.find(compusArray => compusArray.precio == 55000))

        function multiplicar(){
            let num1 = 55000
            let num2 = parseFloat(prompt("¿Cantidad para llevar?"));
            let resultado = num1 * num2;
            alert(`El costo total es : $${resultado}`)
        }
        multiplicar()
        break;
    default:
        break;
}
