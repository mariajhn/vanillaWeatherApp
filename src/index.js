let apikey = "3fdc8cfbf2d6fa0116c9ae92d3df4f79";
let city = "London";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

axios.get(url).then(displayWeather);
function formatDate(timestamp){
   
    let date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if(10> minutes)
        minutes = `0${minutes}`;
    if(10> hours)
        hours = `0${hours}`;
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day =days[ date.getDay()];

    return (`${day}  ${hours} : ${minutes}`);
}
function displayWeather(response) {
    let tempElement = document.querySelector("#temperature");
    let temperature = Math.round(response.data.main.temp);
    tempElement.innerHTML = temperature;

    let cityElement = document.querySelector("#city");
    let city = response.data.name;
    cityElement.innerHTML = city;

    let descriptionElement = document.querySelector("#description");
    let description = response.data.weather[0].description;
    descriptionElement.innerHTML = description;

    let humidityElement = document.querySelector("#humidity");
    let humidity = response.data.main.humidity;
    humidityElement.innerHTML = humidity;

    let windElement = document.querySelector("#wind");
    let wind = response.data.wind.speed;
    windElement.innerHTML = wind;

    let dateElement = document.querySelector("#date");
    dateElement.innerHTML = formatDate(response.data.dt*1000);

    console.log(
      `It is ${temperature} degrees, ${description}, in ${response.data.name}`
    );
   
  }
  