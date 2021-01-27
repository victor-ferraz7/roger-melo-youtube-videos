// Escrever funções com mais de 2 parâmetros

// Evitar
const sum = (firstNumber, secondNumber, thirdNumber, fourthNumber) => {
    firstNumber + secondNumber + thirdNumber + fourthNumber
}

// Prefira
const sum = (...numbers) => {
    numbers.reduce((accResult, currNumber) => accResult + currNumber, 0)
}