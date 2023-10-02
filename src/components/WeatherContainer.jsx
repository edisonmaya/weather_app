import { useState } from 'react';
import Button_slider from '../components/Button_slider.jsx';
import WeatherStat from '../components/WeatherStat.jsx';
const WeatherContainer = ({ weather, dark, setDark }) => {

    const [isCelsius, setIsCelsius] = useState(true)
    console.log(weather);
    const changeUnitTemp = (temp) => {
        if (isCelsius) {
            const celsiusTemp = (temp - 273.15).toFixed(1)
            return celsiusTemp
        } else {
            const farTemp = (((temp - 273.15) * 9 / 5) + 32).toFixed(1)
        }
    }

    const handleChangeUnit = () => {
        setIsCelsius(!isCelsius)
    }
    console.log();

    return (
        <section className="grid gap-6 text-center ">
            <Button_slider dark={dark} setDark={setDark} ></Button_slider>
            <h3 className='text-4xl'>{weather.name + ' '},{' ' + weather.sys.country}</h3>

            <article className="bg-slate-500/50 rounded-2xl grid grid-cols-2 gap-2 py-4 items-center justify-center">
                <h4 className='col-span-2 text-2xl capitalize'>{weather.weather[0].description}</h4>
                <span className='text-6xl'>{changeUnitTemp(weather.main.temp)} °F</span>
                <picture>
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt={weather.weather[0].description} />
                </picture>
            </article>
            <article className="grid grid-cols-3 justify-center bg-slate-500/50 rounded-2xl h-16 w-full gap-2">
                <WeatherStat icon={"/wind"} unit={"m/s"} value={weather.wind.speed} dark={dark}></WeatherStat>
                <WeatherStat icon={"/humidity"} unit={"m/s"} value={weather.main.humidity} dark={dark}></WeatherStat>
                <WeatherStat icon={"/pressure"} unit={"m/s"} value={weather.main.pressure} dark={dark}></WeatherStat>
            </article>
            <div className='flex justify-center items-center'>
                {dark === true ?
                    <button className='flex justify-center items-center w-36 h-9 text-white bg-blue-500 rounded-2xl py-4 '>Change to °F</button>
                    :
                    <button className='flex justify-center items-center w-36 h-9 bg-white text-blue-500 rounded-2xl py-4 '>Change to °F</button>
                }
            </div>
        </section>
    )
}
export default WeatherContainer
