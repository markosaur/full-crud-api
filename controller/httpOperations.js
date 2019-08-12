const axios = require('axios');

const getSwapiCharacters= (req, res) => {
    let swapiPromise = axios.get('https://swapi.co/api/planets/1/');
    swapiPromise.then(response => {
        console.log(response);
    })
}