let nombre = prompt("Ingrese su nombre");
alert(`Bienvenido ${nombre}, acontinuacion, vea nuestras compus.`)

class Computadora{
    constructor(unidades, procesador, ram, almacenamiento, os){
        this.procesador = procesador;
        this.ram = ram;
        this.almacenamiento = almacenamiento;
        this.os = os;
        this.unidades = unidades;
    }
}

//le agrego caracteristicas ac ada computadora y luego lo muestro a traves de la consola...

const computadora1 = new Computadora("11", "Intel core2 2.40ghz", "2gb ddr3", "240gb hdd", "Windows 7");
const computadora2 = new Computadora("12", "AMD athlon 3.0ghz", "4gb ddr3", "500gb hdd", "Windows 8");
const computadora3 = new Computadora("16", "Intel i3 3.30ghz", "8gb ddr3", "240gb ssd", "Windows 10");
const computadora4 = new Computadora("19", "Intel i5 4.1ghz", "8gb ddr3", "240gb sdd", "Windows 10");
const computadora5 = new Computadora("10", "AMD Ryzen3 4.0ghz", "8gb ddr4", "500gb ssd", "Windows 10");
const computadora6 = new Computadora("12", "AMD Ryzen5 4.2ghz", "16gb ddr4", "500gb sdd", "Windows 11");

const computadoras = [computadora1, computadora2, computadora3, computadora4, computadora5, computadora6]
console.table(computadoras)

let seleccion = prompt("Selecciona una marca para ver su precio : \n 1 - Intel \n 2 - AMD ");

switch (seleccion) {
    case "1":
        let valor = prompt("Selecciona un modelo : \n 1 - Intel core2 \n 2 - Intel i3 \n 3 - Intel i5");
        if(valor == "1"){
            alert("Su precio es : $15000")
        }
         else if(valor == "2"){
            alert("Su precio es : $28500")
        }
        else if(valor == "3"){
            alert("Su precio es : $35500")
        }
        else{
            alert("error")
        }
        break;
    case "2":
        let valor1 = prompt("Selecciona un modelo : \n 1 - AMD Athlon \n 2 - AMD Ryzen3 \n 3 - Ryzen5");
        if(valor1 == "1"){
            alert("Su precio es : $20000")
        }
         else if(valor1 == "2"){
            alert("Su precio es : $42500")
        }
        else if(valor1 == "3"){
            alert("Su precio es : $55000")
        }
        else{
            alert("error")
        }
        break;
    default:
        break;
}
alert("Gracias, vuelvas prontos")

