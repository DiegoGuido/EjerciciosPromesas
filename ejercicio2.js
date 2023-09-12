console.log("EJERCICIO 2 -----------");
let urls = [
    "https://pokeapi.co/api/v2/pokemon/ditto",
    "https://pokeapi.co/api/v2/pokemon/mankey",
    "https://pokeapi.co/api/v2/pokemon/charizard",
    "https://pokeapi.co/api/v2/pokemon/squirtle"
];


function getUrls(urls) {
    return new Promise((resolve, reject) => {
        let result = [];
        urls.forEach(element => {
            fetch(element).then((res) =>res.json())
            .then((res) => {
                result.push(res)
            })
        });
        resolve(result);
    })
}



getUrls(urls).then((res) => {
    console.log(res);
})