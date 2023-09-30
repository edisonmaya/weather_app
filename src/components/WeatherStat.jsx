const WeatherStat = ({icon, unit, value}) => {
    return (
        <div className="flex gap-1 items-center">
            <img className="h-6 w-6" src={icon} alt="" />
            <span>{value}{unit}</span>
        </div>
    )
}
export default WeatherStat