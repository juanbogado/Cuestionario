// // Función para mostrar una pregunta
// function mostrarPregunta(pregunta) {
//     alert(pregunta);
// }

// // Función para la respuesta
// function validarRespuesta(respuesta, respuestaCorrecta) {
//     return respuesta === respuestaCorrecta;
// }

// // Función para realizar el cuestionario
// function realizarCuestionario() {
//     const preguntas = [
//         {
//             pregunta: "¿Cuál es la posición de Facundo Conte en voleibol? \n1- Armador \n2- Libero \n3- Punta receptor",
//             respuestaCorrecta: 3,
//         },
//         {
//             pregunta: "¿Cuál es el mejor club de futbol de Argentina? \n1- River \n2- Boca Junior \n3- Velez",
//             respuestaCorrecta: 2,
//         },
//     ];

//     let puntaje = 0;

//     for (let i = 0; i < preguntas.length; i++) {
//         const preguntaActual = preguntas[i];
//         mostrarPregunta(preguntaActual.pregunta);
//         const respuesta = parseInt(prompt("Ingrese el número de su respuesta:"));

//         if (validarRespuesta(respuesta, preguntaActual.respuestaCorrecta)) {
//             alert("¡Respuesta correcta!");
//             puntaje++;
//         } else {
//             alert(`Respuesta incorrecta. La respuesta correcta era la opción ${preguntaActual.respuestaCorrecta}`);
//         }
//     }

//     alert(`Fin del cuestionario. Puntaje: ${puntaje} de ${preguntas.length}`);
//     console.log(`Puntaje: ${puntaje} de ${preguntas.length}`);

//     // Ejemplo de uso de objetos, arrays y funciones de orden superior
//     const usuarios = [
//         { nombre: "Juan", puntaje: 2 },
//         { nombre: "María", puntaje: 1 },
//         { nombre: "Carlos", puntaje: 2 },
//     ];

//     const usuariosAprobados = usuarios.filter(usuario => usuario.puntaje >= 2);
//     console.log("Usuarios aprobados:", usuariosAprobados);

//     const nombresAprobados = usuariosAprobados.map(usuario => usuario.nombre);
//     console.log("Nombres de usuarios aprobados:", nombresAprobados);

//     usuarios.forEach(usuario => {
//         console.log(`${usuario.nombre} tiene un puntaje de ${usuario.puntaje}`);
//     });
// }


// realizarCuestionario();

// Función para mostrar una pregunta y opciones
function mostrarPregunta(pregunta, opciones) {
    document.getElementById('pregunta').textContent = pregunta;
    const opcionesList = document.getElementById('opciones');
    opcionesList.innerHTML = '';
    opciones.forEach((opcion, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${opcion}`;
        opcionesList.appendChild(li);
    });
}

// Función para validar la respuesta
function validarRespuesta(respuesta, respuestaCorrecta) {
    return respuesta === respuestaCorrecta;
}

// Función para realizar el cuestionario
function realizarCuestionario() {
    const preguntas = [
        {
            pregunta: "¿Cuál es la posición de Facundo Conte en voleibol?",
            opciones: ["Armador", "Libero", "Punta receptor"],
            respuestaCorrecta: 3,
        },
        {
            pregunta: "¿Cuál es el color del cielo en un día despejado?",
            opciones: ["Verde", "Azul", "Rojo"],
            respuestaCorrecta: 2,
        },
    ];

    let puntaje = 0;
    let preguntaIndex = 0;

    const submitButton = document.getElementById('submit');
    const respuestaInput = document.getElementById('respuesta');
    const resultadoContainer = document.getElementById('resultado');

    submitButton.addEventListener('click', () => {
        const respuesta = parseInt(respuestaInput.value);
        if (validarRespuesta(respuesta, preguntas[preguntaIndex].respuestaCorrecta)) {
            resultadoContainer.textContent = "¡Respuesta correcta!";
            puntaje++;
        } else {
            resultadoContainer.textContent = `Respuesta incorrecta. La respuesta correcta era la opción ${preguntas[preguntaIndex].respuestaCorrecta}`;
        }
        preguntaIndex++;
        if (preguntaIndex < preguntas.length) {
            mostrarPregunta(preguntas[preguntaIndex].pregunta, preguntas[preguntaIndex].opciones);
        } else {
            resultadoContainer.textContent = `Fin del cuestionario. Puntaje: ${puntaje} de ${preguntas.length}`;
            console.log(`Puntaje: ${puntaje} de ${preguntas.length}`);

            // Almacenar el puntaje en el almacenamiento local
            localStorage.setItem('puntaje', puntaje);

            // Convertir y almacenar los datos de los usuarios en formato JSON
            const usuarios = [
                { nombre: "Juan", puntaje: 2 },
                { nombre: "María", puntaje: 1 },
                { nombre: "Carlos", puntaje: 2 },
            ];
            const usuariosJSON = JSON.stringify(usuarios);
            localStorage.setItem('usuarios', usuariosJSON);
        }
    });

    // Mostrar la primera pregunta al cargar la página
    mostrarPregunta(preguntas[preguntaIndex].pregunta, preguntas[preguntaIndex].opciones);
}

// Llamamos a la función principal para realizar el cuestionario
realizarCuestionario();
