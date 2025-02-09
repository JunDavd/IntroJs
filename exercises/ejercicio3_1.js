const csvToFile = (input) => {
    let resultFile = ''
    let listToModified = [...input]
    let fileType = listToModified.splice(listToModified.length - 1, 1)
    listToModified = listToModified.join('/')
    resultFile = listToModified + `.${fileType.toString()}`
    return resultFile
}

const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
]

const file1 = csvToFile(input1)
console.log(file1)


const input2 = [
    'CodinGame',
    'python',
    'py',
];

const file2 = csvToFile(input2)
console.log(file2)


const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
]

const file3 = csvToFile(input3)
console.log(file3)
