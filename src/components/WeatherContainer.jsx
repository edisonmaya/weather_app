import { useState } from 'react';
import Button_slider from '../components/Button_slider.jsx';
import WeatherStat from '../components/WeatherStat.jsx';
const WeatherContainer = ({ weather, dark, setDark }) => {

    const [isCelsius, setIsCelsius] = useState(true)
    
    const changeUnitTemp = (temp) => {
        if (isCelsius) {
            const celsiusTemp = (temp - 273.15).toFixed(1)
            return `${celsiusTemp} °C`
        } else {
            const farTemp = (((temp - 273.15) * 9 / 5) + 32).toFixed(1)
            return `${farTemp} °F`
        }
    };

    const handleChangeUnit = () => {
        setIsCelsius(!isCelsius);
    }
/*

*/
    return (
        <section className="grid gap-8 text-center ">
            <Button_slider dark={dark} setDark={setDark} ></Button_slider>
            <h3 className='text-xl font-semibold'>{weather.name + ' '},{' ' + weather.sys.country}</h3>
            <div className='grid gap-5 sm:grid-cols-[1fr_auto]' >
            <article className="bg-slate-500/50 rounded-[38px] grid grid-cols-2 gap-0 py-6 items-center justify-center ">
                <h4 className='col-span-2 text-2xl capitalize'>{weather.weather[0].description}</h4>
                <span className='text-4xl' >{changeUnitTemp(weather.main.temp)}</span>
                <picture className='grid justify-center items-center'>
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt={weather.weather[0].description} />
                </picture>
            </article>
            <article className="grid grid-cols-3  divide-x py-4 justify-center items-center bg-slate-500/50 rounded-2xl min-h-max w-full gap-1 sm:grid-cols-1  sm:divide-x-0 sm:divide-y-2 sm:justify-items-start">
                <WeatherStat icon={"/wind"} unit={" m/s"} value={weather.wind.speed} dark={dark}></WeatherStat>
                <WeatherStat icon={"/humidity"} unit={" %"} value={weather.main.humidity} dark={dark}></WeatherStat>
                <WeatherStat icon={"/pressure"} unit={" hPa"} value={weather.main.pressure} dark={dark}></WeatherStat>
            </article>
            </div>
            <div className='flex justify-center items-center'>
            {dark === true ?
                    <button onClick={handleChangeUnit} className='flex justify-center items-center w-36 h-9 text-white bg-blue-500 rounded-2xl py-4 font-semibold'>Change to °C / °F</button>
                    :
                    <button onClick={handleChangeUnit} className='flex justify-center items-center w-36 h-9 bg-white text-blue-500 rounded-2xl py-4 font-semibold'>Change to °C / °F</button>
                }    
            </div>
        </section>
    )
}
export default WeatherContainer
