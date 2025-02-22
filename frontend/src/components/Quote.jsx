import dblQuotes from "../assets/images/dblquote.png"

const Quote = () => {
    return (
    <div id="Quote" className="absolute flex flex-col items-center gap-y-4 bg-[#FFF7EB] w-9/12 h-56 p-12 rounded-2xl -bottom-20 z-50 shadow">
            <img className="w-4 h-fit" src={dblQuotes} alt="" />
            <div className="flex flex-col text-center">
                <p className="font-light text-2xl">Design is not about  rules and theories but </p>
                <p className="font-bold italic text-2xl">imagination</p>
            </div>
            <img className="w-4 h-fit rotate-180" src={dblQuotes} alt="" />
        </div>
    )
}

export default Quote