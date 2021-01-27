// 4 - Funções que produzem efeitos colaterais (side efects)
// Efeito Colateral: É qualquer mudança de estado na aplicação que seja observada fora da função observada e que não seja o que a função retorna
// Ex: Logar no console, modificar propriedades externas

// Evite 
const addNumberToArray = number => {
    numbers = numbers.concat(number)
    return numbers
}

// Prefira
const addNumberToArray = number => [...numbers, number]