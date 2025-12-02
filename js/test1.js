const respuestasCorrectas = {
            pregunta1: 'b',
            pregunta2: 'b',
            pregunta3: 'b',
            pregunta4: 'b',
            pregunta5: 'c',
            pregunta6: 'b',
            pregunta7: 'a',
            pregunta8: 'b',
            pregunta9: 'b',
            pregunta10: 'c',
            pregunta11: 'b',
            pregunta12: 'a',
            pregunta13: 'a',
            pregunta14: 'b',
            pregunta15: 'a',
            pregunta16: 'b',
            pregunta17: 'a',
            pregunta18: 'b'
        };

        function calcularPuntuacion(event) {
            // Evita que el formulario se envíe realmente y recargue la página.
            event.preventDefault(); 

            let aciertos = 0;
            const totalPreguntas = Object.keys(respuestasCorrectas).length;

            // Itera sobre cada pregunta.
            for (const nombrePregunta in respuestasCorrectas) {
                const respuestaCorrecta = respuestasCorrectas[nombrePregunta];
                
                // Obtiene la selección del usuario.
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
                "¡Buen trabajo!";

            // Muestra el resultado en una alerta emergente.
            alert(mensajeResultado);
            
            return false;
        }