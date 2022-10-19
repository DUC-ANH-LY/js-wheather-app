let weather = {
  apiKey: "f1f766e965aad385a5c5d26f4b1f13ae",
  FecthWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid="+this.apiKey
    )
      .then((response) =>  response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data){
    const {name} = data;
    const {icon,description} =data.weather[0];
    const {speed} =data.wind;
    const {temp, humidity} =data.main;
    console.log(name,description,icon,speed,temp,humidity);
    document.querySelector(".city").innerText =  `Wheather in ${name}`;
    document.querySelector(".icon").src =  "https://openweathermap.org/img/wn/"+ icon +"@2x.png";
    document.querySelector(".description").textContent =  description;
    document.querySelector(".humidity").textContent =  `Humidity: ${humidity}%`;
    document.querySelector(".wind").textContent =  `Wind speed: ${speed} km/h`;
    document.querySelector(".temp").textContent =  `${Math.round(temp- 273.15)}°`;
    document.querySelector(".wheather").classList.remove("loading");  
  },
  search: function(){
    console.log(document.querySelector(".search-bar").value);
    this.FecthWeather(document.querySelector(".search-bar").value);
  }
};

document.querySelector(".search button").addEventListener('click',()=>weather.search());
document.querySelector(".search-bar").addEventListener('keyup',(event)=>{
    if(event.key =="Enter")
        weather.search();

});

