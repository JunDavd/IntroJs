//Datos
const datos = [
    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['JavaScript', 'HTML', 'CSS'],
        proyectos: [
            { id: 1, nombre: 'Proyecto 1' },
            { id: 2, nombre: 'Proyecto 2' }
        ]
    },
    {
        id: 2,
        nombre: 'María',
        habilidades: ['Python', 'SQL', 'Django'],
        proyectos: [
            { id: 3, nombre: 'Proyecto 3' },
            { id: 4, nombre: 'Proyecto 4' }
        ]
    },
    {
        id: 3,
        nombre: 'Pedro',
        habilidades: ['Java', 'Spring', 'Hibernate'],
        proyectos: [
            { id: 5, nombre: 'Proyecto 5' },
            { id: 6, nombre: 'Proyecto 6' }
        ]
    }
];

//Función 1
const desarrolladoresJavascript = (datos,language = 'JavaScript') =>{
    return JSON.stringify(datos.filter(dato => {
        return  dato.habilidades.includes(language)
    }),null,2)
}
const result1 = desarrolladoresJavascript(datos)
console.log(resul2)


//Función 2

const nombresProyectos = (datos) => {
    let proyectosList = []
    datos.map(dato => dato.proyectos.map(proyecto => {
        proyectosList.push(proyecto.nombre)
    }))
    return proyectosList
}

const resul2 = nombresProyectos(datos)
console.log(resul2)
