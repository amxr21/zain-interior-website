import { useContext } from "react"

import { translations } from "../data"

import { LanguageContext } from "../context/LanguageContext"



const ServicesIntro = () => {
    const { language } = useContext(LanguageContext)


    return (
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <div className="flex h-fit gap-x-4 flex-1 about-header text-2xl lg:text-4xl font-bold uppercase">
                <p>{translations[language].services.title}</p>
                <div className="grow text-2xl text-[#FFFAF3] border-b-black border-b-[1px]">....</div>
            </div>
            <p className="flex-1 about-text text-sm lg:text-lg text-justify text-lg font-normal uppercase">{translations[language].services.description}</p>
            {/* <p className="flex-1 about-text text-justify text-lg font-light uppercase">We ensure to deliver the best quality for our clients through our services. We ensure to deliver the best quality for our clients through our services. </p> */}
        </div>
    )
}


export default ServicesIntro;