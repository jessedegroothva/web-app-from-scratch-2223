// zorgt ervoor dat we een HTML-element met de id 'artList' kunnen selecteren en bewerken.

const artList = document.getElementById('artList');

function fetchData() {
  const url = 'https://www.rijksmuseum.nl/api/nl/collection?key=9ZKSEiYs&involvedMaker=Rembrandt+van+Rijn';


// De functie fetchData() maakt gebruik van de fetch() methode om gegevens van de 
// kunstcollectie-api op te halen. Dit wordt gedaan door het verzenden van een verzoek naar 
// de api, en het verwerken van de ontvangen gegevens in het JSON-formaat.

  fetch(url)
    .then(response => response.json())
    .then(data => {
      populateList(data.artObjects);
    })
    .catch(error => console.error(error));
}

// De populateList() functie wordt gebruikt om de opgehaalde gegevens op de 
// webpagina te tonen. Deze functie maakt gebruik van een for-loop om de eerste 
// vijf kunstwerken te selecteren en elk ervan in een li element te tonen. 
// Er wordt een click eventlistener aan elk li element toegevoegd, zodat er 
// meer informatie over het kunstwerk getoond kan worden wanneer erop wordt geklikt.

function populateList(artObjects) {
  artList.innerHTML = '';

  for (let i = 0; i < 5; i++) {
    const artObject = artObjects[i];

    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${artObject.webImage.url}" alt="${artObject.title}">
      <h2>${artObject.title}</h2>
      <p>${artObject.principalOrFirstMaker}</p>
    `;

// Wanneer er op een li element wordt geklikt, wordt er een div element aangemaakt dat 
// informatie over het kunstwerk bevat. Deze informatie omvat een afbeelding van het 
// kunstwerk, de titel, de maker, de locatie van productie, de lange titel, het 
// objectnummer, of er wel of niet gedownload mag worden, de hoogte en de breedte 
// van de afbeelding. Het div element wordt vervolgens aan de body van de webpagina 
// toegevoegd.

    li.addEventListener('click', () => {
      const div = document.createElement('div');
      div.id = 'overlay';

      const img = document.createElement('img');
      img.src = artObject.webImage.url.replace('=s0', '=s400');
      img.alt = artObject.title;

      const heading = document.createElement('h2');
      heading.innerText = artObject.title;

      const para = document.createElement('p');
      para.innerText = artObject.principalOrFirstMaker;

      const locationP = document.createElement('p');
      locationP.innerText = artObject.productionPlaces;

      const longtitleP = document.createElement('p');
      longtitleP.innerText = artObject.longTitle;

      const objectnumberP = document.createElement('p');
      objectnumberP.innerText = artObject.objectNumber;

      const permindownloadP = document.createElement('p');
      permindownloadP.innerText = artObject.permitDownload;

      const imageheightP = document.createElement('p');
      imageheightP.innerText = artObject.webImage.height;

      const imagewidthP = document.createElement('p');
      imagewidthP.innerText = artObject.webImage.width;

      div.appendChild(img);
      div.appendChild(heading);
      div.appendChild(para);
      div.appendChild(locationP);
      div.appendChild(longtitleP);
      div.appendChild(objectnumberP);
      div.appendChild(permindownloadP);
      div.appendChild(imageheightP);
      div.appendChild(imagewidthP);

      document.body.appendChild(div);

// Wanneer er op het div element wordt geklikt, wordt het weer van de webpagina 
// verwijderd.

      div.addEventListener('click', function() {
        document.body.removeChild(div);
      });
    });

    artList.appendChild(li);
  }
}

fetchData();
