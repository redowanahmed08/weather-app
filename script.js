async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '46b5d6909a7bcbb719dd403f41c2412e';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('cityName').innerText = data.name;
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
        } else {
            document.getElementById('cityName').innerText = 'City not found';
            document.getElementById('temperature').innerText = '';
            document.getElementById('description').innerText = '';
        }
    } catch (error) {
        console.error('Error fetching the weather data:', error);
        document.getElementById('cityName').innerText = 'Error fetching data';
        document.getElementById('temperature').innerText = '';
        document.getElementById('description').innerText = '';
    }
}
