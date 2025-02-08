
const alumnno = {
    nombre: 'Juan David',
    apellidos: 'Ruiz Muñoz',
    temasBootcamp: [
        {curso: 'React',fechaInicio:'2025-05-12'},
        {curso: 'Node.js', fechaInicio:'2025-03-10'},
        {curso: 'Git', fechaInicio: '2025-01-01'}
    ],
    busquedaActiva: true 
}

const reactFechaInicio = alumnno.temasBootcamp[0].fechaInicio
console.log(reactFechaInicio)