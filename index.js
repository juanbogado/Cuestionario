// Función para mostrar una pregunta
function mostrarPregunta(pregunta) {
    alert(pregunta);
}

// Función para la respuesta
function validarRespuesta(respuesta, respuestaCorrecta) {
    return respuesta === respuestaCorrecta;
}

// Función para realizar el cuestionario
function realizarCuestionario() {
    const preguntas = [
        {
            pregunta: "¿Cuál es la posición de Facundo Conte en voleibol? \n1- Armador \n2- Libero \n3- Punta receptor",
            respuestaCorrecta: 3,
        },
        {
            pregunta: "¿Cuál es el mejor club de futbol de Argentina? \n1- River \n2- Boca Junior \n3- Velez",
            respuestaCorrecta: 2,
        },
    ];

    let puntaje = 0;

    for (let i = 0; i < preguntas.length; i++) {
        const preguntaActual = preguntas[i];
        mostrarPregunta(preguntaActual.pregunta);
        const respuesta = parseInt(prompt("Ingrese el número de su respuesta:"));

        if (validarRespuesta(respuesta, preguntaActual.respuestaCorrecta)) {
            alert("¡Respuesta correcta!");
            puntaje++;
        } else {
            alert(`Respuesta incorrecta. La respuesta correcta era la opción ${preguntaActual.respuestaCorrecta}`);
        }
    }

    alert(`Fin del cuestionario. Puntaje: ${puntaje} de ${preguntas.length}`);
    console.log(`Puntaje: ${puntaje} de ${preguntas.length}`);

    // Ejemplo de uso de objetos, arrays y funciones de orden superior
    const usuarios = [
        { nombre: "Juan", puntaje: 2 },
        { nombre: "María", puntaje: 1 },
        { nombre: "Carlos", puntaje: 2 },
    ];

    const usuariosAprobados = usuarios.filter(usuario => usuario.puntaje >= 2);
    console.log("Usuarios aprobados:", usuariosAprobados);

    const nombresAprobados = usuariosAprobados.map(usuario => usuario.nombre);
    console.log("Nombres de usuarios aprobados:", nombresAprobados);

    usuarios.forEach(usuario => {
        console.log(`${usuario.nombre} tiene un puntaje de ${usuario.puntaje}`);
    });
}


realizarCuestionario();