// Lien vers un fichier JSON ou l'URL d'une API externe

let apiUrl = 'escapeGame.json';
fetch(apiUrl)
    .then(response => response.json())
    // Attente de la réponse à une promesse JS qu'on transformera en escapeGame.
    .then(data => {
        console.log(data);
        console.log(data.entreprise.nomCommercial);
        // Traitement réel des données en utilisant "data"
    })
 .catch(error => console.error('Erreur lors de la récupération des données :', error));// Gestion des erreurs
 /*
    function fetchscapeGamejson() {
        fetch('escapeGame.json')
            .then(response => response.json())
            .then(data => {
               console.log(data);
            })
            .catch(error => console.error('Error fetching contacts:', error));
    }

    */
    

