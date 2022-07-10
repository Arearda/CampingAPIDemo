document.querySelector('button').addEventListener('click', apiRequest);

async function apiRequest() {
const sleepingBagName = document.querySelector('input').value;
try{
    const response = await fetch(`https://camping-gear-api.herokuapp.com/api/${sleepingBagName}`)
    const data = await response.json();

    document.getElementById('bagName').innerText = data.bagname
    document.getElementById('brand').innerText = data.bagbrand
    document.getElementById('price').innerText = data.price
    document.getElementById('temp').innerText = data.temprating
    document.getElementById('gender').innerText = data.gender
    document.getElementById('fill').innerText = data.fill
    document.getElementById('weight').innerText = data.weight
    document.getElementById('dimensions').innerText = data.dimensions
    document.getElementById('bestUse').innerText = data.bestuse

} catch(error) {
    console.log(error)
}
}