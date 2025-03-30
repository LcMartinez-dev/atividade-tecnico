const calculate = document.getElementById('calculate');

let result = document.getElementById('result');
let classification = document.getElementById('classification');

calculate.addEventListener('click', () => {
    let weight = parseFloat(document.getElementById('weight').value.replace(',', '.'));
    let height = parseFloat(document.getElementById('height').value.replace(',', '.'));

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        result.innerText = 'Erro';
        classification.innerText = 'Por favor, insira valores válidos.';
        return;
    }

    let imc = weight / (height * height);
    result.innerText ='Seu IMC é ' + imc.toFixed(2);

    // Classificação do IMC
    if (imc < 18.5) {
        classification.innerText = 'você está com ' + 'Peso baixo';
    } else if (imc < 24.9) {
        classification.innerText = 'você está com ' + 'Peso normal';
    } else if (imc < 29.9) {
        classification.innerText = 'você está com ' + 'Excesso de peso';
    } else if (imc < 34.9) {
        classification.innerText = 'você está com ' + 'Obesidade';
    } else if (imc < 39.9) {
        classification.innerText = 'você está com ' + 'Obesidade Grau 2';
    } else {
        classification.innerText = 'você está com ' + 'Obesidade Mórbida';
    }
}); 