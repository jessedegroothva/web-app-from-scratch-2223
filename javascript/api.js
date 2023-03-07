import {populateList, populateArt} from './populate.js'


// const searchInput = document.querySelector('[data-search]');
// console.log(searchInput);
// searchInput.addEventListener('input', (e) => {
//   const value = e.target.value;
//   console.log(e.target.value);

//   fetchData(e.target.value)

  // users.forEach(user => {
  //   user.name.toLowerCase().includes(value.toLowerCase())})
  //     console.log(user.name);
// })


// let users = []


export function fetchData(query) {
  let url = 'https://www.rijksmuseum.nl/api/nl/collection?key=9ZKSEiYs&involvedMaker';

// hier wordt een variabele gemaakt die .skeleton selecteert
const skeletonWrapper = document.querySelector('.skeleton');
// fetch is een methode die de data van de api ophaalt
fetch(url)
// .then is een methode die de data van de api omzet naar json
  .then(response => {
    return response.json();
  })
  // .then is een methode die de data van de api in een variabele stopt
  .then(data => {
    // activateSearch(data); is
    activateSearch(data)
    
    populateList(data.artObjects);
    // handleRoute(data);
    skeletonWrapper.style.display = 'none';
  })
  // .catch is een methode die een error in de console logt als de data niet geladen kan worden
  .catch(error => {
    // hier wordt een error message in de html gezet met een h1
    const errorMessage = document.createElement('h1');
    errorMessage.textContent = 'Oeps er is een probleem met het laden van de Rijksmuseum app. Probeer het nog een keer.';
    // appendChild zorgt ervoor dat de error message in de html wordt gezet
    document.body.appendChild(errorMessage);
    console.error('Error:', error);
    skeletonWrapper.style.display = 'none';
  });
}

function activateSearch(data) {
  // hier selecteer ik de input in de html | searchData = data-search
  const searchInput = document.querySelector('[data-search]');
  // console.log(searchInput);
  // hier voeg ik een eventlistener toe aan de input, dit runt de functie elke keer als er iets in de input wordt getypt
  // de functie runt met de event e, omdat we de waarde van de input nodig hebben
  searchInput.addEventListener('input', (e) => {
    // hier selecteer ik de waarde van de input en log ik deze in de console om te kijken of het werkt
    const value = e.target.value;
    console.log(value);

    // hier filter ik de data op de maker van het kunstwerk
    // als deze letter combinatie overeen komt met een schilder, dan worden de kunstwerken van die schilder in de lijst getoond
    // includes is een methode die kijkt of de waarde van de input voorkomt in de maker van het kunstwerk
    // de methode toLowerCase() zorgt ervoor dat de input en de maker van het kunstwerk in kleine letters worden weergegeven
    const filteredObjects = data.artObjects.filter(object => object.principalOrFirstMaker.toLowerCase().includes(value.toLowerCase()));
    console.log(filteredObjects);
    populateList(filteredObjects);
  })
}

export async function artData(id) {
  // hier maak ik een variabele aan met de url van de api
  // ${id} is een placeholder voor de id van het kunstwerk
  const url = `https://www.rijksmuseum.nl/api/nl/collection/${id}?key=9ZKSEiYs`;

  // hier maak ik een variabele aan met de fetch methode
  // await zorgt ervoor dat de functie wacht tot de fetch klaar is
  const data = await fetch(url);
  // hier maak ik een variabele aan met de json methode zodat de pc de data kan lezen
  const { artObject } = await data.json();
  // hier roep ik de functie aan die de data in de html zet
  populateArt(artObject)
}

  

