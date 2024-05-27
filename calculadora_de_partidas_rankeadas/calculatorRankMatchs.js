let rank = ""
numberOfWins(102, 10)
determineRank(average)

function numberOfWins(victory, defeat) {
    return average = victory - defeat
}

function determineRank(average) {
    if (average <= 10) {
        rank = "ferro"
    } else if(average >= 11 && average <= 20) {
        rank = "bronze"
    } else if(average >= 21 && average <= 50) {
        rank = "prata"
    } else if(average >= 51 && average <= 80) {
        rank = "ouro"
    } else if(average >= 81 && average <= 90) {
        rank = "diamante"
    } else if(average >= 91 && average <= 100) {
        rank = "lendário"
    } else if(average >= 101) {
        rank = "imortal"
    } else {
        rank = "inválido"
    }
}

console.log(`O Herói tem de saldo de ${average} está no nível de ${rank}`)