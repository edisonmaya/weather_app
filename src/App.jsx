import axios from 'axios';
import { useEffect, useState } from 'react';
import ContainerDarkLight from "../src/components/ContainerDarkLight.jsx";
import './App.css';


function App() {

  const [weather, setWeather] = useState(null)
  const [dark, setDark] = useState(true)
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
      <main className='min-h-screen bg-[url(/fondo1_weather.png)] bg-no-repeat bg-cover bg-center'>
        {
          weather === null ? <h3>cargando......</h3> : <ContainerDarkLight weather={weather} dark={dark} setDark={setDark}/>
        }

      </main>
    </>
  )
}

export default App
