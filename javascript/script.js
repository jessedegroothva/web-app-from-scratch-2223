import { fetchData, artData } from "./api.js";

handleRoute();
// gebruik routie.js om de url af te vangen
// haal data op die past bij de url
// "/"
// fetchData();
// "/:id", b.v /nachtwacht
// fetchData();

// window.addEventListener('hashchange', () => {
//     console.log('Deze hash is veranderd');
//     fetchData(id)
// }, false);

// window.addEventListener('hashchange', () => {
//     console.log('Deze hash is veranderd');
//     fetchData(id)
// }, false);

// window.addEventListener('hashchange', handleRoute);

export function handleRoute(data){
    routie({
        // startpagina
        '': () => {
            fetchData();
            // if(data){
            //     window.location.hash = 'home'
            // }
        },
        // '#home': () => {
        //     fetchData();
        //     if(data){
        //         window.location.hash = 'home'
        //     }
        // },
        // haal data op van id uit fetchData
        // waarom heb je de id nodig? voor de laadtijd te verminderen?
        // een nieuwe pagina maken?
        'details/:id': id => {
            artData(id)
            console.log(id);
        }
    })
};



// zonder Jeffery, Joost en Robert zou het mijn niet lukken om routie
// te laten werken. 