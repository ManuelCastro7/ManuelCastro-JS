//Desafio 1 = consiste en contestar una pregunta hasta que sea correcta

let repetir = true

while(repetir) {

    let pregunta1 = prompt("¿Capital de España?").toLowerCase()
    if(pregunta1 == "madrid") {
        alert("¡Correcto!")
        repetir = false
    }else{
        console.log("Incorrecto, vuelva intentar.")
    }
}