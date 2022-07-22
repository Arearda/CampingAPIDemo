// Get a reference to elements on the page
let resultsEl = document.getElementById("bag-list");
let resetBtn = document.getElementById("clear-results");
let clearField = document.getElementById('input-field');
let populateBtn = document.getElementById("find-item");
let inputField = document.querySelector('input');
let populated = true;
  
populateBtn.addEventListener('click', apiRequest);

// Clearing the input field and returned results 
resetBtn.addEventListener('click', function() {
    resultsEl.innerHTML = "";
    clearField.value = "";
});

//calling the apiRequest function
async function apiRequest() { 
    const sleepingBagName = inputField.value;
    let response = await fetch(`https://camping-gear-api.herokuapp.com/api/${sleepingBagName}`)
    let data = await response.json();
    data.forEach(addResultToPage);
}

//Defining the function that renders the results of the input value to the page
function addResultToPage(result) {
   resultsEl.insertAdjacentHTML("afterbegin", 
       `Sleeping Bag Name: ${result.bagname}` + '<br>' +
       `Sleeping Bag Brand: ${result.bagbrand}` + '<br>' +
       `Temperature Rating: ${result.temprating}` + '<br>' +
       `Price: ${result.price}` + '<br>' +
       `Gender: ${result.gender}` + '<br>' +
       `Fill: ${result.fill}` + '<br>' +
       `Weight: ${result.weight}` + '<br>' +
       `Dimensions: ${result.dimensions}` + '<br>' +
       `Best Use: ${result.bestuse}` + '<br>' + '<br>')
}
