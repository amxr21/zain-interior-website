import { ZainTypo, ZainTypoAr } from "../constants/images"


import { useContext } from "react"

import { translations } from "../data"

import { LanguageContext } from "../context/LanguageContext"


const NumbersHeader  = () => {

    const { language } = useContext(LanguageContext)




    return (
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-20">
            <div className="header">
                <img src={language == 'ar' ? ZainTypoAr : ZainTypo } alt="" className="min-w-24 w-24 lg:min-w-64" />
            </div>
            <div className="numbers-info text-sm lg:text-xl text-justify">{translations[language].statistics.subtitle}</div>
        </div>
    )
}


export default NumbersHeader 