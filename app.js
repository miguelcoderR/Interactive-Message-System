function validateAge() {
            // Obtener valores del formulario
            const name = document.getElementById('name').value.trim();
            const ageInput = document.getElementById('age').value.trim();
            const resultDiv = document.getElementById('result');
            
            // Resetear el resultado
            resultDiv.style.display = 'none';
            
            // Validar que se ingresó un nombre
            if (!name) {
                showResult('Por favor ingresa tu nombre', 'error');
                return;
            }
            
            // Validar que se ingresó una edad
            if (!ageInput) {
                showResult('Por favor ingresa tu edad', 'error');
                return;
            }
            
            // Convertir edad a número
            const age = Number(ageInput);
            
            // Validar que la edad sea un número válido
            // Validar que la edad esté entre 1 y 100
            if (isNaN(age) || age < 1 || age > 100) {
                showResult('Error: Por favor ingresa una edad válida entre 1 y 100 años.', 'error');
                console.error('Error: Edad fuera del rango permitido', ageInput);
                return;
                }
            
            // Determinar el mensaje según la edad
            if (age < 18) {
                showResult(`<span class="age-icon">👶</span> Hola ${name}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`, 'info');
            } else {
                showResult(`<span class="age-icon">👨‍💻</span> Hola ${name}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`, 'success');
            }
        }
        
        function showResult(message, type) {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = message;
            resultDiv.className = 'result ' + type;
            resultDiv.style.display = 'block';
            
            // También mostrar en consola
            if (type === 'error') {
                console.error(message);
            } else {
                console.log(message);
            }
        }