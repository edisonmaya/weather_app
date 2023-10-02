import WeatherContainer from '../components/WeatherContainer.jsx'
const ContainerDarkLight = ({ weather, dark, setDark }) => {
    return (
        dark === true ?
            <section className=' font-["Lato"] flex flex-col gap-2 justify-center items-center min-h-screen bg-gray-950/60 bg-no-repeat bg-cover font-semibold text-white p-4 '>
                <WeatherContainer weather={weather} dark={dark} setDark={setDark}/>
            </section>
            :
            <section className=' font-["Lato"] flex flex-col gap-2 justify-center items-center min-h-screen bg-transparent bg-no-repeat bg-cover font-semibold text-black p-4 '>
                <WeatherContainer weather={weather} dark={dark} setDark={setDark}/>
            </section>
    )
}
export default ContainerDarkLight