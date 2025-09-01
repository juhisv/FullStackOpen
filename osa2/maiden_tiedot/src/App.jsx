import { useState, useEffect } from "react"
import Filter from "./components/Filter"
import coutryService from "./services/coutryService"
import Weather from "./components/Weather"
import weatherService from "./services/weatherService"

function App() {
  const [filter, setFilter] = useState("")
  const [allCountries, setAllCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const allCountries = () => {
      coutryService.getAllCountries().then((allCountries) => {
        setAllCountries(allCountries)
        setFilteredCountries(allCountries)
      })
    }
    allCountries()
  }, [])

  const handleFilterChange = (event) => {
    const newFilter = event.target.value
    setFilter(newFilter)
    const filteredCountries = allCountries.filter((country) =>
      country.name.common.toLowerCase().includes(newFilter.toLowerCase())
    )
    setFilteredCountries(filteredCountries)
  }

  const handleWeatherFetch = (location) => {
    weatherService.getWeather(location).then((weather) => {
      setWeather(weather)
    })
  }

  const handleShowDetails = (country) => {
    setFilteredCountries([country])
    handleWeatherFetch(country.capital[0])
  }

  console.log(`Filter: ${filter} Countries: ${filteredCountries.length}`)
  if (filter === "") {
    return (
      <>
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
        <div>Type to search for countries</div>
      </>
    )
  } else if (filteredCountries.length > 10) {
    return (
      <>
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
        <div>Too many matches, specify another filter</div>
      </>
    )
  } else if (filteredCountries.length === 0) {
    return (
      <>
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
        <div>No countries found</div>
      </>
    )
  } else if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
    return (
      <>
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
        <div>
        {filteredCountries
          .filter((country) =>
            country.name.common.toLowerCase().includes(filter.toLowerCase())
          )
          .map((country) => (
            <div key={country.cca3}>{country.name.common} <button onClick={() => handleShowDetails(country)}>show</button></div>
          ))}
      </div>
    </>
    )
  } else if (filteredCountries.length === 1) {
    return (
      <>
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
        <h1>{filteredCountries[0].name.common}</h1>
        <div>Capital: {filteredCountries[0].capital}</div>
        <div>Area: {filteredCountries[0].area}</div>
        <h2>Languages</h2>
        <ul>
          {Object.values(filteredCountries[0].languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={filteredCountries[0].flags.png} alt={`Flag of ${filteredCountries[0].name.common}`} />
        <Weather weather={weather} />
      </>
    )
  }
}

export default App
