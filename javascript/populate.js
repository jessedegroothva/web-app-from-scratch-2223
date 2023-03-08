// De populateList() functie wordt gebruikt om de opgehaalde gegevens op de 
// webpagina te tonen. Deze functie maakt gebruik van een for-loop om de eerste 
// vijf kunstwerken te selecteren en elk ervan in een li element te tonen.

export function populateList(artObjects) {
  // home.innerHTML = '';
  const main = document.querySelector('main');

  main.innerHTML = `

    <ul id="home">

    </ul>
  `;

  for (let i = 0; i < 10; i++) {
    const artObject = artObjects[i];

    console.log(artObject);
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${artObject.webImage.url.slice(0, -3) + "=s1000"}" alt="${artObject.title}">
      <h2>${artObject.title}</h2>
      <p>${artObject.principalOrFirstMaker}</p>
      <a href="#details/${artObject.objectNumber}">View details</a>
    `;

    home.appendChild(li);
  }
}

export function populateArt(artObject) {
  console.log(artObject)
  // console.log(home);
  const main = document.querySelector('main');
  main.id = "details";
  main.innerHTML = `
    <img src="${artObject.webImage.url.slice(0, -3) + "=s1000"}" alt="${artObject.title}">
    <h2>${artObject.title}</h2>
    <p>${artObject.longTitle}</p>
    <p>${artObject.productionPlaces}</p>
    <p>${artObject.objectNumber}</p>
    <p>${artObject.permitDownload}</p>
    <p>${artObject.webImage.height}</p>
    <p>${artObject.webImage.width}</p>
    <a href="">back home</a>
  `;

}

// Wanneer er op een li element wordt geklikt, wordt er een div element aangemaakt dat 
// informatie over het kunstwerk bevat. Deze informatie omvat een afbeelding van het 
// kunstwerk, de titel, de maker, de locatie van productie, de lange titel, het 
// objectnummer, of er wel of niet gedownload mag worden, de hoogte en de breedte 
// van de afbeelding. Het div element wordt vervolgens aan de body van de webpagina 
// toegevoegd.

//     li.addEventListener('click', () => {
//       const div = document.createElement('div');
//       div.id = 'overlay';

//       const img = document.createElement('img');
//       img.src = artObject.webImage.url.slice(0, -3) + "=s1000";
//       img.alt = artObject.title;

//       const heading = document.createElement('h2');
//       heading.innerText = artObject.title;

//       const para = document.createElement('p');
//       para.innerText = artObject.principalOrFirstMaker;

//       const locationP = document.createElement('p');
//       locationP.innerText = artObject.productionPlaces;

//       const longtitleP = document.createElement('p');
//       longtitleP.innerText = artObject.longTitle;

//       const objectnumberP = document.createElement('p');
//       objectnumberP.innerText = artObject.objectNumber;

//       const permindownloadP = document.createElement('p');
//       permindownloadP.innerText = artObject.permitDownload;

//       const imageheightP = document.createElement('p');
//       imageheightP.innerText = artObject.webImage.height;

//       const imagewidthP = document.createElement('p');
//       imagewidthP.innerText = artObject.webImage.width;

//       // probeer een kruisje toe te voegen om duidelijk te maken dat je terug kan naar de pagina
//       const paragraph = document.createElement("button");
//       paragraph.textContent = "Back";

//       div.appendChild(img);
//       div.appendChild(heading);
//       div.appendChild(para);
//       div.appendChild(locationP);
//       div.appendChild(longtitleP);
//       div.appendChild(objectnumberP);
//       div.appendChild(permindownloadP);
//       div.appendChild(imageheightP);
//       div.appendChild(imagewidthP);
//       div.appendChild(paragraph);

//       document.body.appendChild(div);

// // Wanneer er op het div element wordt geklikt, wordt het weer van de webpagina 
// // verwijderd.

//       paragraph.addEventListener('click', function() {
//         document.body.removeChild(div);
//       });
//     });

