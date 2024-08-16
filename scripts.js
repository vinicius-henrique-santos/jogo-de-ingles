const corretaResposta = ["Then", "As a Result of", "Therefore", "Thus", "So", "Consequently", "Then", "Consequently"];
const palavraFinal  =  ["L", "I", "N", "K", "I", "N", "G", "  W O R D S   !!!!!!!!"]; 
let letrasReveladas = ["_", "_", "_", "_", "_", "_", "_", "_____"];
let acertos = 0;

document.querySelectorAll('.button-contOptioner button').forEach((button, index) => {
    button.addEventListener('click', function() {
        const botaoClicado = Math.floor(index / 3);
        const p = document.querySelectorAll('.orientacao p')[botaoClicado];
        const texto = p.innerHTML;

        const updatedText = texto.replace('_____', button.textContent);
        p.innerHTML = updatedText;

        if (button.textContent === corretaResposta[botaoClicado]) {
            button.style.backgroundColor = 'green';

            // Atualiza a letra correta na string 
            letrasReveladas[acertos] = palavraFinal[acertos];

            // Atualiza o texto exibido com as letras reveladas
            document.getElementById('palavra-final').textContent = letrasReveladas.join(' ');
            acertos++;
        } else {
            button.style.backgroundColor = 'red';
        }

        // Desativa os botões após o clique
        document.querySelectorAll('.button-contOptioner')[botaoClicado].querySelectorAll('button').forEach(btn => {
            btn.disabled = true;
        });
    });
});
