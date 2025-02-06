// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para agregar a los amigos que el usuario ingrese
let arrayAmigos = [];
let lista = document.getElementById('listaAmigos');
let limiteAmigos = 10;

//función que se encarga de agregar a los amigos al array arrayAmigos
function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;

    if (arrayAmigos.length === limiteAmigos){
        alert(`¡Has llegado a la cantidad máxima de amigos que puedes añadir`); 
    } else {
        if (amigo === '') {
            alert("Por favor, inserte un nombre.");
        } else {
            arrayAmigos.push(amigo);
            actualizarLista();
        }
    }

    limpiarCampo();
}

//función que limpia el input
function limpiarCampo(){
    document.querySelector('#amigo').value = '';
}

//función para actualizar el arrayAmigos 
function actualizarLista(){
    ocultarLista();

    //ciclo que crea un li dentro de "lista" por cada amigo que se ingrese
    for (let x = 0; x < arrayAmigos.length; x++) {
        const li = document.createElement('li');
        li.textContent = arrayAmigos[x];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    
    if (arrayAmigos.length === 0){
        alert('Aún no has añadido a ningun amigo.');
    } else {
        let valorResultado = document.getElementById('resultado');
        let indice = Math.floor(Math.random()*arrayAmigos.length);
        console.log(arrayAmigos[indice]);
        valorResultado.innerHTML = `El amigo secreto sorteado es: ${arrayAmigos[indice]}`;
    }

    ocultarLista();
}

function ocultarLista(){
    lista.innerHTML = '';
}