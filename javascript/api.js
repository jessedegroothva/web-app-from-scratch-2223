import {populateList, populateArt} from './populate.js'

export function fetchData(id) {
    const url = 'https://www.rijksmuseum.nl/api/nl/collection?key=9ZKSEiYs&involvedMaker';

  // De functie fetchData() maakt gebruik van de fetch() methode om gegevens van de 
  // kunstcollectie-api op te halen. Dit wordt gedaan door het verzenden van een verzoek naar 
  // de api, en het verwerken van de ontvangen gegevens in het JSON-formaat.
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        populateList(data.artObjects);
        // handleRoute(data);
        
      })
}

export async function artData(id) {
  const url = `https://www.rijksmuseum.nl/api/nl/collection/${id}?key=9ZKSEiYs`;

  const data = await fetch(url);
  const { artObject } = await data.json();
  populateArt(artObject)
}
  // export function artData(id) {
  //   const url = `https://www.rijksmuseum.nl/api/nl/collection/${id}?key=9ZKSEiYs`;
  
  //   // De functie fetchData() maakt gebruik van de fetch() methode om gegevens van de 
  //   // kunstcollectie-api op te halen. Dit wordt gedaan door het verzenden van een verzoek naar 
  //   // de api, en het verwerken van de ontvangen gegevens in het JSON-formaat.
    
  //     fetch(url)
  //       .then(response => response.json())
  //       .then(data => {
  //         console.log(data);
  //         populateArt(data.artObject);
  //         // handleRoute(data);
          
  //       })
  //   }
  

