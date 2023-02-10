const gitHubHandleP = document.querySelector('#gitHubHandle');
const websiteP = document.querySelector('#website');
const squadsP = document.querySelector('#squads');

function fetchData (){
    const url = 'https://whois.fdnd.nl/api/v1/member?id=cldepeeey3wva0bw5mlg9m85m'
  
    const data = fetch(url)
                      .then(response => response.json())
                      .then(data => {
                            changeHTML(data)
                      })

    }

function changeHTML (data) {
      const nameData = data.member.gitHubHandle
      gitHubHandleP.insertAdjacentHTML('beforeend', `${gitHubHandleData}`) 

      const slugData = data.member.website
      websiteP.insertAdjacentHTML('beforeend', `${websiteData}`) 

      const cohortData = data.member.squads
      squadsP.insertAdjacentHTML('beforeend', `${squadsData}`) 
}

fetchData();