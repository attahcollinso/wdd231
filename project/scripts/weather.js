export async function loadWeather() {
    const weatherContainer = document.getElementById('weather-info');
    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&current_weather=true');
        const data = await response.json();
        const { temperature, windspeed } = data.current_weather;
        weatherContainer.textContent = `Temperature: ${temperature}°C, Wind Speed: ${windspeed} m/s`;
    } catch (error) {
        weatherContainer.textContent = "Unable to load weather data.";
    }
}

document.addEventListener('DOMContentLoaded', loadWeather);
