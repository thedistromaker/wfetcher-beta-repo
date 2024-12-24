const apiKey = "Change with your API key"
const weatherIcons = {
    Sunny: "icons/clear-day.svg",
    Rain: "icons/overcast-rain.svg"
}

async function getWeatherData() {
    const city = document.getElementById("city").value;
    if (!city) {
        alert("No city entered! Please retry.");
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch weather data!");
        }
        
        const data = await response.json()
        displayWeatherInfo(data);
        } catch (error) {
            document.getElementById("weather-info-sc").innerText = error.message;
        }
    }

    function displayWeatherInfo(data) {
        const { location, current } = data;
        const weatherInfo = `
    Location: ${location.name}, ${location.region}, ${location.country} \n 
    Temperature: ${current.temp_c}°C \n
    Condition: ${current.condition.text}
    `;
    document.getElementById("weather-info-sc").innerText = weatherInfo;
    }