document.querySelector('button').addEventListener('click', apiRequest);

//calling the apiRequest function
async function apiRequest() { 
    const sleepingBagName = document.querySelector('input').value;
    let response
    let data

    try { 
        response = await fetch(`https://camping-gear-api.herokuapp.com/api/${sleepingBagName}`)
    }
    catch (error) { // catch scope
        console.log(error)
    }

    try {
        data = await response.json();
    } 
    catch (error) {
        console.log(error)
    }


document.getElementById('bagName').innerText = data[0].bagname
document.getElementById('brand').innerText = data[0].bagbrand
document.getElementById('price').innerText = data[0].price
document.getElementById('temp').innerText = data[0].temprating
document.getElementById('gender').innerText = data[0].gender
document.getElementById('fill').innerText = data[0].fill
document.getElementById('weight').innerText = data[0].weight
document.getElementById('dimensions').innerText = data[0].dimensions
document.getElementById('bestUse').innerText = data[0].bestuse

// make sure I get back data
console.log(data)

let resultsEl = document.getElementById("bag-list");
let resetBtn = document.getElementById("clear-results");
let clearField = document.getElementById('input-field')
let populateBtn = document.getElementById("find-item");

// // When reset button is clicked, clear the results list
resetBtn.addEventListener('click', function() {
    resultsEl.innerHTML = "";
    clearField.value = "";
    console.log ("Results reset");  
    }
);
populateBtn.addEventListener("click", function() {
    data.forEach(addResultToPage);
    console.log ("Results populated");
  });
  
  function addResultToPage(result) {
       resultsEl.insertAdjacentHTML("afterbegin", "<li><Sleeping bag name:</b> " + data.bagname + ", " +
          "<b>Brand:</b> " + data.bagbrand + "</li>");
    }

}