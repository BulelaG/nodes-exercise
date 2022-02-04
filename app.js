const axios = require('axios');
const fs = require('fs');
// Make a request for a user with a given ID
axios.get('https://randomuser.me/api/?results=10')
  .then(function (response) {
    // handle success


    let people = response.data.results
    let aHtml = ''
    for(let i = 0; i < people.length; i++){
      aHtml += `
        <p>${people[i].name.first} ${people[i].name.last}</p>
        <p>${people[i].cell }</p>`
      
    }
    fs.writeFileSync('index.html',aHtml)
  })

  .catch(function (error) {
    // handle error
    console.log(error);
  })
   


