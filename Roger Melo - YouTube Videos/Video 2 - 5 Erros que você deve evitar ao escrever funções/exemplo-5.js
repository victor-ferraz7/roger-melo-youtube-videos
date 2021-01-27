// 5 - Não encapsular condicionais

// Evitar
if (person.age >= 18 && person.age <= 30) {
    // ...
}

// Prefira
const isACollPerson = person => person.age >= 18 && person.age <= 30

if (isACollPerson(person)) {
    
}