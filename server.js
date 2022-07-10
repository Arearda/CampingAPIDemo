document.querySelector('button').addEventListener('click', apiRequest);

async function apiRequest() {
const sleepingBagName = document.querySelector('input').value;
try{
    const response = await fetch(`https://camping-gear-api.herokuapp.com/api/${sleepingBagName}`)
    const data = await response.json();

    document.getElementById('bagName').innerText = data.bagname[0]
    document.getElementById('brand').innerText = data.bagbrand[0]
    document.getElementById('price').innerText = data.price[0]
    document.getElementById('temp').innerText = data.temprating[0]
    document.getElementById('gender').innerText = data.gender[0]
    document.getElementById('fill').innerText = data.fill[0]
    document.getElementById('weight').innerText = data.weight[0]
    document.getElementById('dimensions').innerText = data.dimensions[0]
    document.getElementById('bestUse').innerText = data.bestuse[0]
    console.log(data)

} catch(error) {
    console.log(error)
}
}