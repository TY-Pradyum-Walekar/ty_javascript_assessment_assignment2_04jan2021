function search(searchTerm) {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=${searchTerm}`)
    .then(result =>  result.json())
    .then(result => init(result)); 
}

function init(responseFromServer){
    console.log(responseFromServer);
    var divbody = "";
    divbody += `
    <div>
    <h6>Mist</h6>
    <h2> ${responseFromServer.location.name}, ${responseFromServer.location.country} </h2>
    <h4> ${responseFromServer.current.temp_f}</h4>
    </div>
    <hr>
    <h5>  FEELS LIKE ${responseFromServer.current.feelslike_f}</h5>
    <h5> Wind ${responseFromServer.current.wind_mph}</h5>
    <h5> HUMIDITY ${responseFromServer.current.humidity}</h5>
    `
    document.getElementById('myWeather').innerHTML=divbody;
}
document.getElementById('searchBtn').addEventListener('click',() =>{
let searchTerm = document.getElementById('search').value;
if (searchTerm)
    search(searchTerm);

})
document.body.style.backgroundImage =  "url('https://cdn.pixabay.com/photo/2020/12/14/21/36/mountains-5832116_1280.jpg')";

