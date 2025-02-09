function obtenerUsuario(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (id === 1) {
                const usuario = { id: 1, nombre: 'John Doe' };
                resolve(usuario)
            }
        }, 2000);
    })
}

const usuario = async () =>{
    try {
        const infoUsuario = await obtenerUsuario(1)
        console.log(infoUsuario)
    } catch (error){
        console.log('Error')
    }
}
usuario()