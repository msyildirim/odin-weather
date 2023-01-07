const result = document.querySelector('#result');
async function getWeather(city){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=&q=${city}&aqi=no`);
    console.log(response);
    const responseJson = await response.json();
    const weather = responseJson.current.temp_c;
    changePage(weather);
    console.log(JSON.stringify(responseJson));
}

function changePage(weather){
    result.innerHTML = weather;
}

document.querySelector('#getButton').addEventListener('click', ()=>{
    let city = document.forms['city-form'].city.value;
    getWeather(city);
})