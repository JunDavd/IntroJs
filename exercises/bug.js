const calcularpromedio = (numeros) => {
    let sumTotal = 0;

    for (let i = 0; i < numeros.length; i++){
        sumTotal += numeros[i]
    }
    const promedio = sumTotal / numeros.length
    return promedio
}

const listaNumeros = [1,2,3,4,5]
const promedioNumeros = calcularpromedio(listaNumeros)
