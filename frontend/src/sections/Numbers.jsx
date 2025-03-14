import { Section, NumbersHeader, Number } from "../components";

import { useContext } from "react"

import { translations } from "../data"

import { LanguageContext } from "../context/LanguageContext"

const Numbers = () => {

    const { language } = useContext(LanguageContext)

    const lang = navigator.language.split('-')[0]


    return (
        <Section Id="Numbers" Classes='flex flex-col gap-y-6'>
            <NumbersHeader />

            <div className="numbers grid grid-cols-2 lg:flex gap-x-4 gap-y-2  lg:gap-4 py-4 justify-between">
                {
                    translations[language].statistics.stats.map((n, i) => {
                        return (
                            <Number key={n['number']} number={n['number']} numberText={n['label']} classes={i != 3 ? language == 'en' ? 'lg:pr-32 lg:border-r' : 'lg:pl-32 lg:border-l' : ""} />
                        )
                    })




                }
            </div>

        </Section>



    )
}

export default Numbers;