// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo(){
    // Capturar el valor del campo de entrada
    const nombreAmigo = document.getElementById('amigo').value
    const resultado = document.getElementById('resultado')

    // Validar que existan valores ingresados
    if (nombreAmigo == ''){
        resultado.innerHTML = 'Por favor, inserte un nombre'
        resultado.className = 'result-list-error'
    } else {
        // Validar que exista un nombre valido, no acepta caracteres numericos
        if (!isNaN(nombreAmigo) || /\d/.test(nombreAmigo)){
            resultado.innerHTML = 'El valor insertado no es un nombre válido'
            resultado.className = 'result-list-error'
            limpiarCampo()
        } else {
            // Validar que el nombre ingresado no se repita en el arreglo
            if (amigos.includes(nombreAmigo)){
                resultado.innerHTML = 'El nombre ya se encuentra registrado, ingrese uno nuevo'
                resultado.className = 'result-list-error'
                limpiarCampo()
            } else {
                // Agregar el nombre ingresado al arreglo y actualiza la lista
                amigos.push(nombreAmigo)
                actualizarAmigos()
                if (amigos.length != 0){
                    resultado.innerHTML = ''
                }
            }
        }        
        
    }
    return
}

function actualizarAmigos(){
    // Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos')
    // Limpiar la lista existente
    lista.innerHTML = ''

    // Iterar sobre el arreglo
    for (let i=0; i<amigos.length; i++){
        const li = document.createElement('li')
        // Agregar elementos a la lista
        li.textContent = amigos[i]
        lista.appendChild(li)
        // Limpiar campo de entrada al añadir amigo
        limpiarCampo()
    }
    return

}

function limpiarCampo(){
    document.getElementById('amigo').value = ''
}

function sortearAmigo(){
    const resultado = document.getElementById('resultado')
    // Validar que haya amigos disponibles
    if(amigos.length === 0 || amigos.length < 2){
        resultado.innerHTML = 'No se puede sortear, no hay amigos registrados o solo existe uno solo!'
        resultado.className = 'result-list-error'
        return
    } else {
        // Generar indice aleatorio
        const generarIndice = Math.floor(Math.random()*amigos.length)

        // Obtener el nombre sorteado a traves del indice generado
        const amigoSorteado = amigos[generarIndice]

        // Mostrar el resultado
        resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`
        resultado.className = 'result-list'
    }
    return
}
