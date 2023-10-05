// Variables
let puntaje = 0;
let preguntaIndex = 0;
const tablaPosiciones = [];

// Preguntas y respuestas
const preguntas = [
    {
        pregunta: "¿Cuál es la posición de Facundo Conte en voleibol?",
        opciones: ["Armador", "Libero", "Punta receptor"],
        respuestaCorrecta: 3,
    },
    {
        pregunta: "¿Cuál es el rol que cumple el armador en un partido de voley?",
        opciones: ["Recibir Atacar", "Armar juego para los atacantes", "Solo recibir"],
        respuestaCorrecta: 2,
    },
];

// Función para mostrar una pregunta y opciones
function mostrarPregunta() {
    const preguntaActual = preguntas[preguntaIndex];
    document.getElementById('pregunta').textContent = preguntaActual.pregunta;
    const opcionesList = document.getElementById('opciones');
    opcionesList.innerHTML = '';
    preguntaActual.opciones.forEach((opcion, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${opcion}`;
        opcionesList.appendChild(li);
    });
}

// Función para validar la respuesta
function validarRespuesta(respuesta) {
    const preguntaActual = preguntas[preguntaIndex];
    return respuesta === preguntaActual.respuestaCorrecta;
}

// Función para mostrar el resultado y actualizar la tabla de posiciones
function mostrarResultado() {
    const nombre = document.getElementById('nombre').value;
    const resultadoText = `¡${nombre}, has obtenido ${puntaje} puntos!`;
    document.getElementById('resultado').textContent = resultadoText;
    document.getElementById('resultado-container').style.display = 'block';

    // Agregar el puntaje a la tabla de posiciones
    tablaPosiciones.push({ nombre, puntaje });

    // Ordenar la tabla de posiciones por puntaje descendente
    tablaPosiciones.sort((a, b) => b.puntaje - a.puntaje);

    // Mostrar el top 3 de la tabla de posiciones
    const tablaPosicionesList = document.getElementById('tabla-posiciones');
    tablaPosicionesList.innerHTML = '';
    for (let i = 0; i < Math.min(3, tablaPosiciones.length); i++) {
        const li = document.createElement('li');
        li.textContent = `${tablaPosiciones[i].nombre}: ${tablaPosiciones[i].puntaje} puntos`;
        tablaPosicionesList.appendChild(li);
    }
}

// Función para manejar el evento de inicio
document.getElementById('iniciar').addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    if (nombre.trim() === '') {
        alert('Por favor, ingresa tu nombre.');
    } else {
        // Ocultar el formulario de inicio y mostrar el cuestionario
        document.getElementById('inicio-container').style.display = 'none';
        document.getElementById('cuestionario-container').style.display = 'block';

        // Mostrar la primera pregunta
        mostrarPregunta();
    }
});

// Función para manejar el evento de envío de respuesta
document.getElementById('submit').addEventListener('click', () => {
    const respuesta = parseInt(document.getElementById('respuesta').value);
    if (validarRespuesta(respuesta)) {
        puntaje++;
        alert("¡Respuesta correcta!");
    } else {
        alert(`Respuesta incorrecta. La respuesta correcta era la opción ${preguntas[preguntaIndex].respuestaCorrecta}`);
    }
    preguntaIndex++;

    if (preguntaIndex < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
});