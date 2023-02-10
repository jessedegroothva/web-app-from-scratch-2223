const naam = document.querySelector('#naam');

function fetchData (){
    const url = 'https://whois.fdnd.nl/api/v1/member?id=cldepeeey3wva0bw5mlg9m85m'
  
    const data = fetch(url)
                      .then(response => response.json())
                      .then(data => {
                            changeHTML(data)
                      })

    }

function changeHTML (data) {
      const name = data.member.name
      const prefix = data.member.prefix
      const lastname = data.member.surname
      naam.insertAdjacentHTML('beforeend', `${name} ${prefix} ${lastname}`) 
}

fetchData();

// -----------------------------------------------------------------------------

// Variabel aanmaken
/*var naam = document.querySelector('p:first-of-type') // verwijzing maken naar het element op de pagina.*/

// EventListener toevoegen (waar die naar moet luisteren en wat hij gaat doen dan)
// 2 parameters meegeven
// de eerste is wat je doet om het uit te voeren (zoals hover of click)
// de tweede is wat hij daarna moet gaan doen. Dus dan kan je bijvoorbeeld een functie aanroepen die je later gaat aanmaken :)
/*vnaam.addEventListener('mouseover', veranderh1Pls)*/

// Functie uitvoeren die hierboven gedefinierd is.
/*vfunction veranderh1Pls(){
  naam.textContent = 'De beste'
  // naam is variabel die je hierboven al hebt gedefinieerd
  // textContent is een voorgeschreven functie waarmee je de tekst in een tekstelement kan aanpassen.
  // gebruik wel de haakjes '' om tussen te schrijven, anders krijg je errors/
}*/

// als je errors krijgt ook maar ergens in je javascript bestand. DOet niks het meer uit je javascript bestand!

// jHUISWERK // Javascript if/else and while loop, for & forEach 

// Voorbeeld en huiswerk made by Jeffrey