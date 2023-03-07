import { fetchData, artData } from "./api.js";

// handleRoute is een functie die de hash uit de url haalt
// de hash is de pagina die je wilt zien
handleRoute();

export function handleRoute(data){
    routie({
        // startpagina
        '': () => {
            fetchData();
        },
        // haal data op van id uit fetchData
        // waarom heb je de id nodig? voor de laadtijd te verminderen?
        // een nieuwe pagina maken?

        // hier wordt de id uit de url gehaald
        'details/:id': id => {
            // hier wordt de functie artData aangeroepen met de id uit de url die opgehaald wordt uit api.js
            artData(id)
            console.log(id);
        }
    })
};


// zonder Jeffery, Ymaro, Joost en Robert zou het mijn niet lukken om routie
// te laten werken. 