//Variables
const tweetList = document.getElementById('lista-tweets');



// EventListener
eventListener();

function eventListener() {

}
//Cuando se envia al Formulario
document.querySelector('#formulario').addEventListener('submit', addTweet);

// Borrar Tweet 
tweetList.addEventListener('click', deleteTweet);


// Cargar Datos de LocalStorage
document.addEventListener('DOMContentLoaded', localStorageListo);



//Funciones

//Añadir tweet al formulario
function addTweet(e) {
    e.preventDefault();

    // leer el valor del textarea
    const tweet = document.getElementById('tweet').value;

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

    //Agregar tweet a LocalStorage
    addTweetLocalStorage(tweet);

}


function deleteTweet(e) {
    e.preventDefault();
    // comparamos que seleccione el texto  (X) 

    if (e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove();
        alert('Tweet eliminado')
    }
}

function addTweetLocalStorage(tweet) {
    let tweets;
    // obtener Tweets
    tweets = getTweetLocalStorage();

    //Insertar un nuevo tweet
    tweets.push(tweet);

    // Convertir dato para LS
    // Agregar al Local Storage
    localStorage.setItem('tweets', JSON.stringify(tweets));
}


function getTweetLocalStorage() {
    let tweets;
    if (localStorage.getItem('tweets') === null) {
        tweets = new Array();
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}


function localStorageListo() {
    let tweets;
    tweets = getTweetLocalStorage();

    tweets.forEach(tweet => {
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

        //Agregar tweet a LocalStorage
        addTweetLocalStorage(tweet);
    });

}
