/* eslint-disable react/prop-types */

const WeatherContainer = ({ weather }) => {
    console.log(weather);
    return (
        <section>
            <h3>{weather.name},{weather.sys.country}</h3>
        </section>
    )
}
export default WeatherContainer