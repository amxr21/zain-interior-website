import dblQuotes from "../assets/images/dblquote.png"


import { translations } from "../data"
import { LanguageContext } from "../context/LanguageContext"
import { useContext } from "react"


const Quote = () => {

    const { language } = useContext(LanguageContext)


    return (
    <div id="Quote" className="absolute flex flex-col items-center gap-y-2 lg:gap-y-4 bg-[#FFF7EB] w-9/12 lg:h-56 p-6 lg:p-12 rounded-xl lg:rounded-2xl -bottom-20 z-50 shadow">
            <img className="w-2 lg:w-4 h-fit" src={dblQuotes} alt="" />
            <div className={`flex flex-col text-center ${language == 'ar' ? 'font-[Doran] gap-y-2' : 'font-[IvyPresto-Headline]'}`}>
                <p className="font-light text-sm lg:text-2xl">{translations[language].quote.text}</p>
                <p className={`font-bold ${language =='en' ? "italic" : ""} text-sm lg:text-2xl`}>{translations[language].quote.highlight}</p>
            </div>
            <img className="w-2 lg:w-4 h-fit rotate-180" src={dblQuotes} alt="" />
        </div>
    )
}

export default Quote