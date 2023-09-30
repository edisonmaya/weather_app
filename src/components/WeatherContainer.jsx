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
        <section className="grid gap-6 text-center">
            <Button_slider dark={dark} setDark={setDark} ></Button_slider>
            <h3>{weather.name + ' '},{' ' + weather.sys.country}</h3>

            <article className="bg-slate-500/50 rounded-2xl grid grid-cols-2 gap-2 py-4 items-center justify-center">
                <h4 className='col-span-2 text-2xl '>{weather.weather[0].description}</h4>
                <span className='text-6xl'>{changeUnitTemp(weather.main.temp)} °F</span>
                <picture>
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt={weather.weather[0].description} />
                </picture>
            </article>
            <article className="grid grid-cols-3 justify-center bg-slate-500/50 rounded-2xl h-16 w-full gap-2">
            <WeatherStat icon={"/wind.png"} unit={"m/s"} value={weather.wind.speed}></WeatherStat>
            <WeatherStat icon={"/humidity.png"} unit={"m/s"} value={weather.main.humidity}></WeatherStat>
            <WeatherStat icon={"/pressure.png"} unit={"m/s"} value={weather.main.pressure}></WeatherStat>    
            </article>
            <button  className='flex justify-center items-center w-full h-8'>C/F</button>
        </section>
    )
}
export default WeatherContainer
//<WeatherStat icon="/wind" unit="m/s" value={weather.wind.speed}></WeatherStat>
//<WeatherStat icon="/humidity" unit="%" value={weather.main.humidity}></WeatherStat>
//<WeatherStat icon="/pressure" unit="hPa" value={weather.wind.pressure}></WeatherStat>