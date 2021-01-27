// 2 - Funções que fazem mais do que uma ação

// Evite 
const emailUsers = users => {
    users.forEach(user => {
        const userRecord = database.lookup(user)

        if(userRecord.isActive()) {
            sendEmail(user)
        }
    })
}


//Prefira
const isActiveUser = user => {
    const userRecord = database.lookup(user)
    return userRecord.isActive()
}

const emailActiveUsers = users => {
    users
        .filter(isActiveUser)
        .forEach(sendEmail)
}