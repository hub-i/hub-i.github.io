const axios = require('axios');

function getJSON() {
  return new Promise(function(resolve) {
    axios.get('https://tutorialzine.com/misc/files/example.json')
      .then(function(response) {
      resolve(response.data);
    });
  });
}

let promise = getJSON();

promise.then((data) => {
  console.log(data[0]);
});
