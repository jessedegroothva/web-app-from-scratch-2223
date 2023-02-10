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