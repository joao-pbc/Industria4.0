
const url = 'http://localhost:5678/api/Products';
function connect(){
    fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the JSON from the response
    })
    .then(data => {
      console.log(data); // Handle the data from the response
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

connect();
