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
    celsiusTemp = response.data.main.temp;
    let temperature = Math.round(celsiusTemp);
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

    let iconElement = document.querySelector("#icon");
    let icon = response.data.weather[0].icon;
   
    iconElement.setAttribute("src" ,`http://openweathermap.org/img/wn/${icon}@2x.png` );



    let dateElement = document.querySelector("#date");
    dateElement.innerHTML = formatDate(response.data.dt*1000);

    console.log(
      `It is ${temperature} degrees, ${description}, in ${response.data.name}`
    );
   
  }
  function search(city)
  {
    let apikey = "3fdc8cfbf2d6fa0116c9ae92d3df4f79";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    
    axios.get(url).then(displayWeather);
    
  }
  function handleSubmit(event)
  {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
  }
   let form = document.querySelector("#search-form");
   form.addEventListener("submit", handleSubmit);


   function displayFahrenheitTemp(event)
   {
    event.preventDefault();
    let tempElement = document.querySelector("#temperature");
    let ftemp = (celsiusTemp*9)/5+32;

    celsius.classList.remove("active");
    fahrenheit.classList.add("active");
    tempElement.innerHTML =Math.round(ftemp) ;
   }
   function displayCelsiusTemp(event)
   {
    event.preventDefault();

    celsius.classList.add("active");
    fahrenheit.classList.remove("active");

    let tempElement = document.querySelector("#temperature");    
    tempElement.innerHTML =Math.round(celsiusTemp) ;
   }

   let celsiusTemp = null;

   let fahrenheit = document.querySelector("#fahrenheit-link");
   fahrenheit.addEventListener("click", displayFahrenheitTemp);

   let celsius = document.querySelector("#celsius-link");
   celsius.addEventListener("click", displayCelsiusTemp);
