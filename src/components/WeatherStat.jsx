const WeatherStat = ({icon, unit, value, dark}) => {

    const iconDark= icon+'_dark.svg'
    const iconLight= icon+'_light.svg'
    return (
        <div className="flex gap-1 items-center">
                {dark===true?
                <img className="h-6 w-6 " src={iconDark} />
                :
                <img className="h-6 w-6" src={iconLight} />
                }
            <span>{value}{unit}</span>
        </div>
    )
}
export default WeatherStat