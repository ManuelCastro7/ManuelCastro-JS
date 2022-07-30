let nombre = prompt("Ingrese su nombre");
alert(`Bienvenido ${nombre}`)

class Computadora{
    constructor(precio, procesador, ram, almacenamiento, os){
        this.procesador = procesador;
        this.ram = ram;
        this.almacenamiento = almacenamiento;
        this.os = os;
        this.precio = precio;
    }
}

const computadora1 = new Computadora("$15000", "Intel dual core 2.40ghz", "2gb", "240gb hdd", "Windows 7");
const computadora2 = new Computadora("$15000", "AMD athlon 3.0ghz", "4gb", "500gb hdd", "Windows 8");
const computadora3 = new Computadora("$15000", "Intel dual core 2.40ghz", "2gb", "240gb hdd", "Windows 7");
const computadora4 = new Computadora("$15000", "Intel dual core 2.40ghz", "2gb", "240gb hdd", "Windows 7");
const computadora5 = new Computadora("$15000", "Intel dual core 2.40ghz", "2gb", "240gb hdd", "Windows 7");


alert("vea nuestras compus")
const computadoras = [computadora1, computadora2, computadora3, computadora4, computadora5]
console.table(computadoras)
alert("asd")

