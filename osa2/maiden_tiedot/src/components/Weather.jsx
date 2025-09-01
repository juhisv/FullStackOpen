const Weather = ({ weather }) => {
  if (!weather || !weather.location || !weather.current) {
    return null
  }

  return (
    <div>
      <h2>Weather in {weather.location.name}</h2>
      <div>Temperature: {weather.current.temp_c}°C</div>
      <div>Condition: {weather.current.condition.text}</div>
      <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
    </div>
  )
}

export default Weather
