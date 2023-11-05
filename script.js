let cityname = document.getElementById("name");
let region = document.getElementById("region");
let country = document.getElementById("country");
let lat = document.getElementById("lat");
let lon = document.getElementById("lon");
let localtime = document.getElementById("localtime");
let utcOffset = document.getElementById("utc-offset");
let temperature = document.getElementById("temperature");
let windSpeed = document.getElementById("wind-speed");
let windDegree = document.getElementById("wind-degree");
let windDir = document.getElementById("wind-dir");
let pressure = document.getElementById("pressure");
let precip = document.getElementById("precip");
let humidity = document.getElementById("humidity");
let feelsLike = document.getElementById("feels-like");
let uvIndex = document.getElementById("uv-index");
let visibility = document.getElementById("visibility");




function getWeather()
{
    let city = document.getElementById('search').value;
    let link = `http://api.weatherstack.com/current?access_key=5d8231ce8a887420b72b8243b61763a3&query=${city}`;
    fetch(
        link
      )
        .then((resp) => resp.json())
        .then((resp) => {
          // console.log(resp)
          cityname.innerText = `City: ${resp.location.name}`;
          region.innerText = `State: ${resp.location.region}`;
          country.innerText = `Country: ${resp.location.country}`;
          lat.innerText = `Latitude: ${resp.location.lat}`;
          lon.innerText = `Longitude: ${resp.location.lon}`;
          localtime.innerText = `Local time: ${resp.location.localtime}`;
          utcOffset.innerText = `UTC Offset: ${resp.location.utc_offset}`;
          temperature.innerText = `Temperature: ${resp.current.temperature}`;
          windSpeed.innerText = `Wind Speed: ${resp.current.wind_speed}`;
          windDegree.innerText = `Wind Degree: ${resp.current.wind_degree}`;
          windDir.innerText = `Wind Direction: ${resp.current.wind_dir}`;
          pressure.innerText = `Pressure: ${resp.current.pressure}`;
          precip.innerText = `Chances of Precipitation: ${resp.current.precip}`;
          humidity.innerText = `Humidity: ${resp.current.humidity}`;
          feelsLike.innerText = `Feels Like: ${resp.current.feelslike}`;
          uvIndex.innerText = `UV Index: ${resp.current.uv_index}`;
          visibility.innerText = `Visibility ${resp.current.visibility}`;
        });
}
