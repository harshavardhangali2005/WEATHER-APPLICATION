const apiKey = "1eb4b0c752ee06e7070fe20c5d191f6b";

function getWeather(){
  let city = document.getElementById("city").value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
  .then(res => res.json())
  .then(data => {
    document.getElementById("result").innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡 Temperature: ${data.main.temp} °C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>💨 Wind: ${data.wind.speed} m/s</p>
    `;
  })
}
