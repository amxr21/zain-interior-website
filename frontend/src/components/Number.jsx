import { useContext } from "react"

import { LanguageContext } from "../context/LanguageContext"

const Number = ({ number, numberText, classes }) => {

    const { language } = useContext(LanguageContext)



    return (
        <div className={`flex flex-col items-center gap-y-3 py-4 ${classes}`}>
            <h2 className={`text-6xl lg:text-8xl font-extrabold ${language == 'ar' ? "lg:-mr-5" : 'lg:-ml-5'} `}>+{number}</h2>
            <p className="text-lg lg:text-2xl w-full text-center font-light">{numberText}</p>
        </div>
    )
}


export default Number;