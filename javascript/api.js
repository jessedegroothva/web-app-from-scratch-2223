import {populateList} from './populate.js'
import {handleRoute} from './script.js'

export function fetchData() {
    const url = 'https://www.rijksmuseum.nl/api/nl/collection?key=9ZKSEiYs&involvedMaker';

  // De functie fetchData() maakt gebruik van de fetch() methode om gegevens van de 
  // kunstcollectie-api op te halen. Dit wordt gedaan door het verzenden van een verzoek naar 
  // de api, en het verwerken van de ontvangen gegevens in het JSON-formaat.
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        populateList(data.artObjects);
        handleRoute(data);
      })
  }
  

