export function activateSearch(data) {
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