//Segunda entrega del proyecto final

let products = [];
let total = 0;


function add(producto, precio) {
    console.log(producto);
    products.push(producto);
    total = total + precio;
    document.getElementById("checkout").innerHTML = `Total $${total}`
    localStorage.setItem("total",JSON.stringify([]))
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

boton1.onclick = () => add('Compu1 $15000', 15000)
boton2.onclick = () => add('Compu2 $20000', 20000)
boton3.onclick = () => add('Compu3 $28500', 28500)
boton4.onclick = () => add('Compu4 $35500', 35500)
boton5.onclick = () => add('Compu5 $42500', 42500)
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


//Pequeño formulario extraido de Developer Mozilla
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