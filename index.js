// Función para mostrar una pregunta y opciones
function mostrarPregunta(pregunta, opciones) {
    alert(pregunta);
    for (let i = 0; i < opciones.length; i++) {
        alert(`${i + 1}. ${opciones[i]}`);
    }
}

// Función para validar la respuesta
function validarRespuesta(respuesta, respuestaCorrecta) {
    return respuesta === respuestaCorrecta;
}

// Función principal
function main() {
    alert("Bienvenido al Cuestionario");

    const preguntas = [
        {
            pregunta: "¿Cuál es la posición  de facundo conte en voley?",
            opciones: ["Armador", "libero", "Punta receptor"],
            respuestaCorrecta: 3,
        },
        {
            pregunta: "¿Cuál es el mejor club de futbol de Argentina?",
            opciones: ["River", "Boca Junior", "Velez"],
            respuestaCorrecta: 2,
        },
    ];

    let puntaje = 0;

    for (let i = 0; i < preguntas.length; i++) {
        const preguntaActual = preguntas[i];
        mostrarPregunta(preguntaActual.pregunta, preguntaActual.opciones);
        const respuesta = parseInt(prompt("Ingrese el número de su respuesta:"));

        if (validarRespuesta(respuesta, preguntaActual.respuestaCorrecta)) {
            alert("¡Respuesta correcta!");
            puntaje++;
        } else {
            alert("Respuesta incorrecta. La respuesta correcta era la opción " + preguntaActual.respuestaCorrecta);
        }
    }

    alert(`Fin del cuestionario. Puntaje: ${puntaje} de ${preguntas.length}`);
    console.log(`Puntaje: ${puntaje} de ${preguntas.length}`);
}

// Llamamos a la función principal
main();