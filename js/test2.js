/**
         * Objeto que contiene las respuestas correctas. 
         * Se usan los nombres de pregunta secuenciales (pregunta1, pregunta2, etc.)
         * como claves, al igual que en el cuestionario anterior.
         */
        const respuestasCorrectas = {
            pregunta1: 'b',
            pregunta2: 'c',
            pregunta3: 'b',
            pregunta4: 'b',
            pregunta5: 'c',
            pregunta6: 'b',
            pregunta7: 'c',
            pregunta8: 'c',
            pregunta9: 'b',
            pregunta10: 'c',
            pregunta11: 'c',
            pregunta12: 'c'
        };

        function calcularPuntuacion(event) {
            // Evita que el formulario se envíe y recargue la página.
            event.preventDefault(); 

            let aciertos = 0;
            const totalPreguntas = Object.keys(respuestasCorrectas).length;

            // Itera sobre cada pregunta.
            for (const nombrePregunta in respuestasCorrectas) {
                const respuestaCorrecta = respuestasCorrectas[nombrePregunta];
                
                // Obtiene el input de radio seleccionado por el usuario.
                const seleccionUsuario = document.querySelector(`input[name="${nombrePregunta}"]:checked`);
                
                // Compara la selección con la respuesta correcta.
                if (seleccionUsuario && seleccionUsuario.value === respuestaCorrecta) {
                    aciertos++;
                }
            }

            // Calcula los fallos.
            const fallos = totalPreguntas - aciertos;

            // Prepara el mensaje para la alerta (usando \n para saltos de línea).
            const mensajeResultado = 
                "🎉 Resultados del Cuestionario 🎉\n\n" +
                "Total de preguntas: " + totalPreguntas + "\n" +
                "Aciertos: " + aciertos + "\n" +
                "Fallos: " + fallos + "\n\n" +
                "¡Sigue estudiando los Modelos de Ciclos de Vida!";

            // Muestra el resultado en una alerta emergente.
            alert(mensajeResultado);
            
            return false;
        }