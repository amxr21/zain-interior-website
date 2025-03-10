import { Section, NumbersHeader, Number } from "../components";

import { translations } from "../data";


const Numbers = () => {

    const lang = navigator.language.split('-')[0]


    return (
        <Section Classes='flex flex-col gap-y-6'>
            <NumbersHeader />

            <div className="numbers flex gap-4 py-4 justify-between">
                {
                    translations[lang].statistics.stats.map((n, i) => {
                        return (
                            <Number key={n['number']} number={n['number']} numberText={n['label']} classes={i != 3 ? 'pr-32 border-r' : ""} />
                        )
                    })




                }
            </div>

        </Section>



    )
}

export default Numbers;