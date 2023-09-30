
const Button_slider = ({dark , setDark}) => {
    console.log(dark)
    const handleModeDark = ()=>{
        setDark(!dark);
    }
 const btn_dark_mode =<span className="w-12 h-6 flex items-center flex-shrink-0 p-1 bg-[#FFFFFF] rounded-full duration-300 ease-in-out peer-checked:bg-[#FFFFFF] after:w-4 after:h-4  after:bg-[#53388F] after:rounded-full after:shadow-md after:duration-300 "></span>
 const btn_light_mode =<span className="w-12 h-6 flex items-center flex-shrink-0 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-[#FFFFFF] after:w-4 after:h-4  after:bg-[#9DC3E9] after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span>


    return (
        <>
            <label className="relative flex justify-center items-center group p-2 text-xl">
                <input type="checkbox" className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" onClick={handleModeDark} />
                {
                    dark === true?  btn_dark_mode : btn_light_mode
                }
            </label>
        </>
    )
}
export default Button_slider

//