document.querySelector('button').addEventListener('click', apiRequest);

async function apiRequest() {
const sleepingBagName = document.querySelector('input').value;
try{
    const response = await fetch(`https://camping-gear-api.herokuapp.com/api/${sleepingBagName}`)
    const data = await response.json();

    document.getElementById('bagName').innerText = data[0].bagname
    document.getElementById('brand').innerText = data[0].bagbrand
    document.getElementById('price').innerText = data[0].price
    document.getElementById('temp').innerText = data[0].temprating
    document.getElementById('gender').innerText = data[0].gender
    document.getElementById('fill').innerText = data[0].fill
    document.getElementById('weight').innerText = data[0].weight
    document.getElementById('dimensions').innerText = data[0].dimensions
    document.getElementById('bestUse').innerText = data[0].bestuse
    console.log(data)

} catch(error) {
    console.log(error)
}
}