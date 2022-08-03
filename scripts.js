//desafio 2
function preguntas( pregunta1, pregunta2, pregunta3, pregunta4, pregunta5){

    alert("Responde las siguientes preguntas :")

    pregunta1 = prompt("¿Capital de España?").toLowerCase()
    if (pregunta1 == "madrid"){
        num1 = 1
    alert("correcto")
    }
    else{
        num1 = 0;
    alert("incorrecto")
    }

    pregunta2 = prompt("¿Capital de Japón?").toLowerCase()
    if (pregunta2 == "tokio"){
        num2 = 1;
    alert("correcto")
    }
    else{
        num2 = 0;
    alert("incorrecto")
    }

    pregunta3 = prompt("¿Capital de Italia?").toLowerCase()
    if (pregunta3 == "roma"){
        num3 = 1;
    alert("correcto")
    }
    else{
        num3 = 0;
    alert("incorrecto")
    }

    pregunta4 = prompt("¿Capital de Brasil?").toLowerCase()
    if (pregunta4 == "brasilia"){
        num4 = 1;
    alert("correcto")
    }
    else{
        num4 = 0;
    alert("incorrecto")
    }

    pregunta5 = prompt("¿Capital de Uruguay?").toLowerCase()
    if (pregunta5 == "montevideo"){
        num5 = 1;
    alert("correcto")
    }
    else{
        num5 = 0;
    alert("incorrecto")
    }


    newPreguntas()
    function newPreguntas() {
        puntos = num1 + num2 + num3 + num4 + num5;
        alert(`Puntos obtenidos : ${puntos}`)
    }
}

preguntas()