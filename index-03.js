//Crie uma função que remova todos os números negativos de um array
//ex: [-1, 1, -2, 2, -3, 3] -> [1, 2, 3]

let numbers = [-2, 0, 5, -6, 7, -8, 9]
let maior = []
let cont = 0
const tamanho = Math.min(numbers.length)

function numMaior(maior){
    for(let i = 0; i < tamanho; i++){
        if(numbers[i] >= 0){
        maior[cont] = numbers[i]
        cont += 1
        }
    }

    return maior
}

 let resultado = numMaior(maior)
 console.log(resultado)