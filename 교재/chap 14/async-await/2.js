const axios = require('axios');

/* jshint ignore:start */
async function getJSONAsync(){
    // The await keyword saves us from having to write a .then() block.
    let response = await axios.get('https://tutorialzine.com/misc/files/example.json');
    return response.data;
}
/* jshint ignore:end */

let promise = getJSONAsync();

promise.then((data) => {
  console.log(data[0]);
});