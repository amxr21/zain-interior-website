import { useContext } from "react"
import Stars from "../assets/images/stars.png"


import { translations } from "../data"
import { LanguageContext } from "../context/LanguageContext"


const HeroCard = () => {
    

    const { language } = useContext(LanguageContext)


    return (
        <div className="hero-section flex flex-col items-center justify-center lg:bg-[rgb(128,128,128,0.5)] lg:w-11/12 h-full lg:h-11/12 rounded-3xl p-8 lg:p-20 gap-y-16 lg:backdrop-blur-[60px] mt-00 lg:mt-0">
            <div className="lg:pt-10 flex flex-col items-end gap-y-2 lg:gap-y-16 mt-16 lg:mt-0 h-9/12 lg:h-fit">
                <div className="lg:text-center flex flex-col gap-y-10 lg:gap-y-10">
                    <h1 className="text-8xl lg:text-9xl font-black font-[Doran] text-white">{translations[language].hero.title}</h1>
                    <p className="text-xl lg:text-3xl font-[Doran] text-right font-normal text-white">“{translations[language].hero.subtitle}”</p>
                </div>

                <div className="div w-16 lg:w-fit">
                    <img src={Stars} alt="" className="starts" />
                </div>

            </div>
        </div>
    )
}

export default HeroCard