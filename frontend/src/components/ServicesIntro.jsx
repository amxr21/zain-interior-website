import { useContext } from "react"

import { translations } from "../data"

import { LanguageContext } from "../context/LanguageContext"



const ServicesIntro = () => {
    const { language } = useContext(LanguageContext)


    return (
        <div className="flex flex-row gap-10">
            <div className="flex h-fit gap-x-4 flex-1 about-header text-4xl font-bold uppercase">
                <p>{translations[language].services.title}</p>
                <div className="grow text-[#FFFAF3] border-b-black border-b">....</div>
            </div>
            <p className="flex-1 about-text text-justify text-lg font-light uppercase">{translations[language].services.description}</p>
            {/* <p className="flex-1 about-text text-justify text-lg font-light uppercase">We ensure to deliver the best quality for our clients through our services. We ensure to deliver the best quality for our clients through our services. </p> */}
        </div>
    )
}


export default ServicesIntro;