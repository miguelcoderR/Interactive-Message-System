function validateAge() {
            // Get form values
            const name = document.getElementById('name').value.trim();
            const ageInput = document.getElementById('age').value.trim();
            const resultDiv = document.getElementById('result');
            
            // Resetear el resultado
            resultDiv.style.display = 'none';
            
            // Reset the result
            if (!name) {
                showResult('Please enter your name', 'error');
                return;
            }
            
            // Validate that an age was entered
            if (!ageInput) {
                showResult('Please enter your age', 'error');
                return;
            }
            
            // Convert age to number
            const age = Number(ageInput);
            
            // Validate that age is a valid number
            // Validate that age is between 1 and 100

            if (isNaN(age) || age < 1 || age > 100) {
                showResult('Error: Please enter a valid age between 1 and 100 years.', 'error');
                console.error('Error: Age outside the allowed range', ageInput);
                return;
                }
            
            // Determine the message according to age
            if (age < 18) {
                showResult(`<span class="age-icon">👶</span> Hello ${name}, You're a minor. Keep learning and enjoying coding!`, 'info');
            } else {
                showResult(`<span class="age-icon">👨‍💻</span> Hello ${name}, You're of legal age. Get ready for great opportunities in the world of programming!`, 'success');
            }
        }
        
        function showResult(message, type) {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = message;
            resultDiv.className = 'result ' + type;
            resultDiv.style.display = 'block';
            
            // Also show in console
            if (type === 'error') {
                console.error(message);
            } else {
                console.log(message);
            }
        }