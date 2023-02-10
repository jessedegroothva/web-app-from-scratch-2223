const nameP = document.querySelector('#name');
const slugP = document.querySelector('#slug');
const cohortP = document.querySelector('#cohort');
const websiteP = document.querySelector('#website');

function fetchData (){
    const url = 'https://whois.fdnd.nl/api/v1/member?id=cldepeeey3wva0bw5mlg9m85m'
  
    const data = fetch(url)
                      .then(response => response.json())
                      .then(data => {
                            changeHTML(data)
                      })

    }

function changeHTML (data) {
      const nameData = data.member.name
      nameP.insertAdjacentHTML('beforeend', `${nameData}`) 

      const slugData = data.member.slug
      slugP.insertAdjacentHTML('beforeend', `${slugData}`) 

      const cohortData = data.member.cohort
      cohortP.insertAdjacentHTML('beforeend', `${cohortData}`) 

      const websiteData = data.member.website
      websiteP.insertAdjacentHTML('beforeend', `${websiteData}`) 
}

fetchData();