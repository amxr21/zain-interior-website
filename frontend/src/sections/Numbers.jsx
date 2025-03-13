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

            <div className="numbers flex gap-4 py-4 justify-between">
                {
                    translations[language].statistics.stats.map((n, i) => {
                        return (
                            <Number key={n['number']} number={n['number']} numberText={n['label']} classes={i != 3 ? language == 'en' ? 'pr-32 border-r' : 'pl-32 border-l' : ""} />
                        )
                    })




                }
            </div>

        </Section>



    )
}

export default Numbers;