//Función
const addAndReverseString = (input) =>{
    let resultString = ''
    let stringToArray = Array.from(input)
    let reverseString = stringToArray.reverse().join('')
    return `${reverseString.length.toString()} ${reverseString}`
}

//ejercicio 1
const input1 = 'string';
const result1 = addAndReverseString(input1)
console.log(result1)

//ejercicio 2
const input2 = 'variable';
const result2 = addAndReverseString(input2)
console.log(result2)


//ejercicio 3
const input3 = 'pointer';
const result3 = addAndReverseString(input3)
console.log(result3)
