import { useContext } from "react"
import { translations } from "../data"
import { LanguageContext } from "../context/LanguageContext"


const AboutIntro = () => {

    const { language } = useContext(LanguageContext)



    return (
        <div className={`flex flex-col lg:flex-row gap-4 lg:gap-8`}>
            <div className={`flex flex-row h-fit gap-x-4 flex-1 about-header text-2xl lg:text-4xl font-bold uppercase`}>
                <p>{translations[language].about.title}</p>
                <div className="grow text-[#FFFAF3] border-b-black border-b">....</div>
            </div>


            <p className={`flex-1 about-text text-justify text-sm lg:text-lg font-light uppercase`}>{translations[language].about.description}</p>

            {/* <p className="flex-1 about-text text-justify text-lg font-light uppercase">Zain Interior, based in Saudi Arabia, specializes in transforming spaces with innovative designs and exceptional craftsmanship. Having successfully served over 40 satisfied clients, we create elegant, functional, and modern interiors for homes and businesses. Our expert team focuses on delivering personalized solutions, ensuring quality and customer satisfaction in every project, reflecting style and comfort.</p> */}
            
        </div>
    )
}

export default AboutIntro;