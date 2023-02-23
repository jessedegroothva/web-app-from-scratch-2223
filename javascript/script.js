import { fetchData } from "./api.js";


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

export function handleRoute(data){
    routie({
        '': () => {
            fetchData();
            if(data){
                window.location.hash = 'home'
            }
        },
        'home': ()=>{
            console.log(data)
            console.log('hey')
        },
        '/details/:id': id => {
            console.log(id)
        }
})};

handleRoute();

// zonder Jeffery, Joost en Robert zou het mijn niet lukken om routie
// te laten werken. 