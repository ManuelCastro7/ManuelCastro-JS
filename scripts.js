//Primera entrega del proyecto final

let repetir = true

let nombre = prompt("Ingrese su nombre.").toLowerCase(); 

while (repetir) {
    let edad = parseFloat(prompt("Ingrese su edad."))
    
    if (edad >= 18){
        alert(`Bienvenido ${nombre}, a continuacion, vea nuestras compus.`)
        break
    }
    else if(edad <17){
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

//a cada precio le sumo el IVA
computadoras.forEach(compusArray => {
    compusArray.precio *= 1.21
})
console.table(computadoras)

let seleccion = prompt("Selecciona una marca para comprar : \n 1 - INTEL \n 2 - AMD ");

switch (seleccion) {
    case "1":
        let valor = prompt("Selecciona un modelo : \n 1 - Intel core2 \n 2 - Intel i3 \n 3 - Intel i5");
        if(valor == "1"){
            alert("Compra finalizada con exito")
        }
         else if(valor == "2"){
            alert("Compra finalizada con exito")
        }
        else if(valor == "3"){
            alert("Compra finalizada con exito")
        }
        else{
            alert("error")
        }
        break;
    case "2":
        let valor1 = prompt("Selecciona un modelo : \n 1 - AMD Athlon \n 2 - AMD Ryzen3 \n 3 - AMD Ryzen5");
        if(valor1 == "1"){
            alert("Compra finalizada con exito")
        }
         else if(valor1 == "2"){
            alert("Compra finalizada con exito")
        }
        else if(valor1 == "3"){
            alert("Compra finalizada con exito")
        }
        else{
            alert("error")
        }
        break;
    default:
        break;
}