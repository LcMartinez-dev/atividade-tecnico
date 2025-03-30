
const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');

let expression = '';

// Função para atualizar o display
function updateDisplay() {
    result.innerText = expression || '0';
}

// Adicionando eventos aos botões
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.innerText;

        if (value === 'C') {
            expression = ''; 
        } else if (value === '=') {
            try {
                expression = eval(expression);
                expression = expression.toString(); 
            } catch {
                expression = 'Erro';
            }
        } else {
            if (expression === 'Erro') expression = '';
            expression += value.replace('x', '*').replace('÷', '/'); 
        }

        updateDisplay();
    });
});

updateDisplay();