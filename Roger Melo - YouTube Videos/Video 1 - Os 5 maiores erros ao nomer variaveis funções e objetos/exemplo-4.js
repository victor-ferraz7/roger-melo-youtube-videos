// 4 - Utilizar curto-circuito ao invés de default parameters

// Evite
const createBook = name => {
    const bookName = name || 'Jurassic Park'
    // ...
}

// Prefira 
const createBook = (name = 'Jurassic Park') => {
    // ...
}