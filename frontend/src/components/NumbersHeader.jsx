import { ZainTypo, ZainTypoAr } from "../constants/images"


import { useContext } from "react"

import { translations } from "../data"

import { LanguageContext } from "../context/LanguageContext"


const NumbersHeader  = () => {

    const { language } = useContext(LanguageContext)




    return (
        <div className="flex gap-20">
            <div className="header">
                <img src={language == 'ar' ? ZainTypoAr : ZainTypo } alt="" className="w-64" />
            </div>
            <div className="numbers-info text-lg text-justify">{translations[language].statistics.subtitle}</div>
        </div>
    )
}


export default NumbersHeader 