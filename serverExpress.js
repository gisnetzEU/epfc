// charge la librairie express
const express = require('express');

// instancie une application express
var app = express();

// configure l'application en
// indiquant quel code exécuté
// lorsqu'une requête HTTP arrive
app.use((req, res) => {
    console.log(req);
    res.end("hello express");
});

// met le serveur à l'état d'écoute sur le port 3000
// et affiche un message lorsque cela est fait
app.listen(3000, () => {
    console.log("serveur prêt, essaie http:\\localhost:3000")
});