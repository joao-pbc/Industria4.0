function getProducts() {
    fetch('http://localhost:5678/api/Products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error('There was a problem with the fetch operation:', error));
}

window.addEventListener(
    onload, $event => { 
        console.log(getProducts()) 
    } 
)