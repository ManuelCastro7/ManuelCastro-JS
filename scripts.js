let products = [];
let total = 0;

<<<<<<< HEAD
let repetir = true
let nombre = prompt("Ingrese su nombre.").toLowerCase(); 
while (repetir) {
    let edad = parseFloat(prompt("Ingrese su edad."))
=======
function add(producto, precio) {
    console.log(producto, precio);
    products.push(producto);
    total = total + precio;
    document.getElementById("checkout").innerHTML = `Total $${total}`
}

function pay() {
    window.alert(products.join("\n"));
}

const divProductos = document.getElementById("compra")
divProductos.innerHTML += `
    <div>
        <button id="checkout" class="button boton" onclick="pay()">Total a pagar</button>
    </div>
    `

const boton1 = document.getElementById("boton1")
boton1.onclick = () => add('Compu1 $15000', 15000)

const boton2 = document.getElementById("boton2")
boton2.onclick = () => add('Compu2 $20000', 20000)

const boton3 = document.getElementById("boton3")
boton3.onclick = () => add('Compu3 $28500', 28500)

const boton4 = document.getElementById("boton4")
boton4.onclick = () => add('Compu4 $35500', 35500)

const boton5 = document.getElementById("boton5")
boton5.onclick = () => add('Compu5 $42500', 42500)

const boton6 = document.getElementById("boton6")
boton6.onclick = () => add('Compu6 $55000', 55000)


//Boton dark
const dark = document.getElementById("dark")
const main = document.querySelector("main")
cargar()
dark.addEventListener("click", e =>{
    main.classList.toggle("darkmode");
    store(main.classList.contains("darkmode"))
});
function cargar(){
    const darkmode = localStorage.getItem("darkmode")

    
    if(!darkmode){
        store("false")
    }
    else if(darkmode == "true"){
        main.classList.add("darkmode")
    }
}

function store(value){
    localStorage.setItem("darkmode", value)
}


//Formulario extraido de Developer Mozilla
const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const para = document.querySelector('p');

let seleccion = prompt("Selecciona un modelo para comprar : \n\n 1 - Intel core2 \n 2 - Intel i3 \n 3 - Intel i5 \n 4 - AMD Athlon \n 5 - AMD Ryzen3 \n 6 - AMD Ryzen5");

switch (seleccion) {
    case "1":
        console.log(computadoras.find(compusArray => compusArray.precio == 15000))

        function multiplicar1(){
            let num1 = 15000
            let num2 = parseFloat(prompt("¿Cantidad para llevar?"));
            let resultado = num1 * num2;
            alert(`El costo total es : $${resultado}`)
        }
        multiplicar1()
        break;
    case "2":
        console.log(computadoras.find(compusArray => compusArray.precio == 20000))

        function multiplicar2(){
            let num1 = 20000
            let num2 = parseFloat(prompt("¿Cantidad para llevar?"));
            let resultado = num1 * num2;
            alert(`El costo total es : $${resultado}`)
        }
        multiplicar2()
        break;
    case "3":
        console.log(computadoras.find(compusArray => compusArray.precio == 28500))

        function multiplicar3(){
            let num1 = 28500
            let num2 = parseFloat(prompt("¿Cantidad para llevar?"));
            let resultado = num1 * num2;
            alert(`El costo total es : $${resultado}`)
        }
        multiplicar3()
        break;
    case "4":
        console.log(computadoras.find(compusArray => compusArray.precio == 35500))

        function multiplicar4(){
            let num1 = 35500
            let num2 = parseFloat(prompt("¿Cantidad para llevar?"));
            let resultado = num1 * num2;
            alert(`El costo total es : $${resultado}`)
        }
        multiplicar4()
        break;
    case "5":
        console.log(computadoras.find(compusArray => compusArray.precio == 42500))

        function multiplicar5(){
            let num1 = 42500
            let num2 = parseFloat(prompt("¿Cantidad para llevar?"));
            let resultado = num1 * num2;
            alert(`El costo total es : $${resultado}`)
        }
        multiplicar5()
        break;
    case "6":
        console.log(computadoras.find(compusArray => compusArray.precio == 55000))

        function multiplicar6(){
            let num1 = 55000
            let num2 = parseFloat(prompt("¿Cantidad para llevar?"));
            let resultado = num1 * num2;
            alert(`El costo total es : $${resultado}`)
        }
        multiplicar6()
        break;
    default:
        break;
}
=======
form.addEventListener('submit', (e) => {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'Complete los dos campos';
  }
});
>>>>>>> desafio2
