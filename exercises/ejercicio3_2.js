//función
const numberToString = (input) => {
    let resultString = ''
    let numberToString = input.toString()
    if (input.length === 1){
        return numberToString
    } else{
        let stringToArray = Array.from(numberToString)
        resultString = stringToArray.join('-')
        return resultString
    }
}

//Ejercicio 1
const input = 10
const result1 = numberToString(input)
console.log(result1)

//Ejercicio 2
const secondInput = 1
const result2 = numberToString(secondInput)
console.log(result2)

//ejercicio 3
const thirdInput = 11234
const result3 = numberToString(thirdInput)
console.log(result3)
