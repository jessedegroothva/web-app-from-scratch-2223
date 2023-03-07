import {populateList, populateArt} from './populate.js'
import {activateSearch} from './search.js'

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
      // hier roep ik de functie aan die de data in de html zet
      populateList(data.artObjects);
      // hier wordt de loading state uitgezet
      skeletonWrapper.style.display = 'none';
  })
    // .catch is een methode die een error in de console logt als de data niet geladen kan worden
    .catch(error => {
      // hier wordt een error message in de html gezet met een h1
      const errorMessage = document.createElement('h1');
      errorMessage.textContent = 'Oeps er is een probleem met het laden van de Rijksmuseum app. Probeer het nog een keer.';
      // appendChild is een methode die de error message in de html zet
      document.body.appendChild(errorMessage);
      console.error('Error:', error);
      skeletonWrapper.style.display = 'none';
  });
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

  

