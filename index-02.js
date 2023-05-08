let numbers = [2, 5, 6, 7, 8, 9]
const tamanho = Math.min(numbers.length)


function somarNumeros(numbers){
    let soma = 0
    for(let i = 0; i< tamanho; i++){
        soma += numbers[i]
    }
    return soma
}

 let resultado = somarNumeros(numbers)
 console.log(resultado)
