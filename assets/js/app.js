//Variables
const tweetList = document.getElementById('lista-tweets');



// EventListener
eventListener();

function eventListener() {

}
//Cuando se envia al Formulario
document.querySelector('#formulario').addEventListener('submit', addTweet);

//Funciones

//Añadir tweet al formulario
function addTweet(e) {
    e.preventDefault();

    // leer el valor del textarea
    const tweet = document.getElementById('tweet').value;
    console.log(tweet);

    // Crear boton eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    //Crear elemento y añadir a la lista de tweets
    const li = document.createElement('li');
    li.innerText = tweet;
    //Añade el boton de borrar
    li.appendChild(botonBorrar);

    //Agregamos el tweet a la lista
    tweetList.appendChild(li);

}