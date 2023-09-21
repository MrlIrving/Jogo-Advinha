let numeroSorteado = Math.floor(Math.random() * 100) + 1;
        let tentativas = 0;
        const maxTentativas = 5;

        function checkGuess() {
            const palpite = parseInt(document.getElementById('guess').value);
            const resultado = document.getElementById('result');
            
            if (isNaN(palpite) || palpite < 1 || palpite > 100) {
                resultado.textContent = 'Por favor, insira um número válido entre 1 e 100.';
            } else {
                tentativas++;
                if (palpite === numeroSorteado) {
                    resultado.textContent = `Parabéns! Você acertou o número ${numeroSorteado} em ${tentativas} tentativa(s).`;
                    document.getElementById('guess').disabled = true;
                } else {
                    const diferenca = Math.abs(numeroSorteado - palpite);
                    let dica = '';
                    if (diferenca <= 10) {
                        dica = 'Perto';
                    } else {
                        dica = 'Longe';
                    }
                    if (tentativas === maxTentativas) {
                        resultado.textContent = `Suas ${maxTentativas} tentativas acabaram. O número correto era ${numeroSorteado}.`;
                        document.getElementById('guess').disabled = true;
                    } else {
                        resultado.textContent = `Você está ${dica}. Tentativa ${tentativas} de ${maxTentativas}.`;
                    }
                }
            }
        }