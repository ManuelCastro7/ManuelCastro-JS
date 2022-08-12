//Desafio 8

alert("Responde las siguientes preguntas :")

let pregunta1 = prompt("¿Capital de España?").toLowerCase()
pregunta1 == "madrid" ? alert("correcto", num1 = 1) : alert("incorrecto", num1 = 0);
    
let pregunta2 = prompt("¿Capital de Japón?").toLowerCase()
pregunta2 == "tokio" ? alert("correcto", num2 = 1) : alert("incorrecto", num2 = 0)

let pregunta3 = prompt("¿Capital de Italia?").toLowerCase()
pregunta3 == "roma" ? alert("correcto", num3 = 1) : alert("incorrecto", num3 = 0);

let pregunta4 = prompt("¿Capital de Brasil?").toLowerCase()
pregunta4 == "brasilia" ? alert("correcto", num4 = 1) : alert("incorrecto", num4 = 0);

let pregunta5 = prompt("¿Capital de Uruguay?").toLowerCase()
pregunta5 == "montevideo" ? alert("correcto", num5 = 1) : alert("incorrecto", num5 = 0);

//pequeña funcion para calcular el porcentaje de preguntas acertadas
function puntaje() {
    let puntos = num1 + num2 + num3 + num4 + num5;
    let puntaje = puntos * 100 / 5
    document.write(`El porcentaje de aciertos es del %${puntaje}`)
}
puntaje()