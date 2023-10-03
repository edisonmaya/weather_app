const WeatherStat = ({icon, unit, value, dark}) => {

    const iconDark= icon+'_dark.svg'
    const iconLight= icon+'_light.svg'
    return (
        <div className="flex gap-1 items-center justify-center sm:p-[24px] font-semibold">
                {dark===true?
                <>
                <img className="h-5 w-5 " src={iconDark} />
                </>
                :
                <img className="h-5 w-5" src={iconLight} />
                }
            <span>{value}{unit}</span>
        </div>
    )
}
export default WeatherStat