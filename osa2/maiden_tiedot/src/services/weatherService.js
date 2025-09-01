import axios from 'axios'
const API_KEY = import.meta.env.VITE_WEATHERAPI_KEY
const BASE_URL = 'https://api.weatherapi.com/v1'

const getWeather = async (location) => {
  console.log(`Fetching weather for ${location}`)
  const response = await axios.get(`${BASE_URL}/current.json`, {
    params: {
      key: API_KEY,
      q: location,
      aqi: 'no'
    },
  })
  return response.data
}

export default { getWeather }
