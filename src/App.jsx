import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import WeatherContainer from '../src/components/WeatherContainer.jsx'

function App() {

  const [weather, setWeather] = useState(null)

  const success = (pos) => {
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    const key = '10b05830f1dbbdfde8489e1355486acc'
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`

    axios.get(baseURL)
      .then(({ data }) => setWeather(data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])


  return (
    <>
      <main className='font-["Lato"] flex justify-center items-center min-h-screen bg-black text-white'>
        {
          weather === null ? <h3>cargando......</h3> : <WeatherContainer weather={weather}></WeatherContainer>
        }

      </main>
    </>
  )
}

export default App
