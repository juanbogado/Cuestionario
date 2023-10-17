// Datos del cuestionario
const preguntas = [
    {
        pregunta: "¿Cuantó toques se puede hacer en voley?",
        opciones: ["2", "5", "3"],
        respuestaCorrecta: "3"
    },
    {
        pregunta: "¿En un equipo de voley, que rol cumple el central?",
        opciones: ["Llevar agua a sus compañeros", "Bloquear y atacar", "Recibir los ataques"],
        respuestaCorrecta: "Bloquear y atacar"
    },
    {
        pregunta: "¿En que año la seleccion de voley masculina gano la medalla de broce en los juegos olimpicos?",
        opciones: ["2020", "2018", "2022"],
        respuestaCorrecta: "2020"
    }
];

// Variables
let nombre = "";
let puntaje = 0;
let preguntaActual = 0;
const nombreInput = document.getElementById("nombreInput");
const iniciarBtn = document.getElementById("iniciarBtn");
const cuestionario = document.getElementById("cuestionario");
const preguntaElement = document.getElementById("pregunta");
const opcionesElement = document.getElementById("opciones");
const siguienteBtn = document.getElementById("siguienteBtn");
const resultado = document.getElementById("resultado");
const puntajeElement = document.getElementById("puntaje");
const reiniciarBtn = document.getElementById("reiniciarBtn");

// Al hacer clic en el botón de inicio
iniciarBtn.addEventListener("click", () => {
    nombre = nombreInput.value;
    if (nombre) {
        cuestionario.style.display = "block";
        iniciarBtn.style.display = "none";
        mostrarPregunta();
    }
});

// Mostrar la pregunta actual
function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];
    preguntaElement.textContent = pregunta.pregunta;
    opcionesElement.innerHTML = "";
    pregunta.opciones.forEach((opcion, index) => {
        const opcionBtn = document.createElement("button");
        opcionBtn.textContent = opcion;
        opcionBtn.addEventListener("click", () => {
            verificarRespuesta(opcion);
        });
        opcionesElement.appendChild(opcionBtn);
    });
}

// Verificar si la respuesta es correcta
function verificarRespuesta(respuesta) {
    const pregunta = preguntas[preguntaActual];
    if (respuesta === pregunta.respuestaCorrecta) {
        puntaje++;
    }
    preguntaActual++;
    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
}

// Mostrar el resultado del cuestionario
function mostrarResultado() {
    cuestionario.style.display = "none";
    resultado.style.display = "block";
    puntajeElement.textContent = `¡${nombre}, obtuviste ${puntaje} de ${preguntas.length} puntos!`;

    // Almacenar el puntaje en el almacenamiento local
    const puntajesAnteriores = JSON.parse(localStorage.getItem("puntajes")) || [];
    puntajesAnteriores.push({ nombre, puntaje });
    localStorage.setItem("puntajes", JSON.stringify(puntajesAnteriores));
}

// Reiniciar el cuestionario
reiniciarBtn.addEventListener("click", () => {
    reiniciarCuestionario();
});

// Reiniciar el cuestionario y puntaje
function reiniciarCuestionario() {
    puntaje = 0;
    preguntaActual = 0;
    resultado.style.display = "none";
    cuestionario.style.display = "block";
    nombreInput.value = "";
    nombre = "";
    mostrarPregunta();
}