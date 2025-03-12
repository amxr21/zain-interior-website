import { useState } from "react"
import { translations } from "../data"

import { CategoryHeader } from './index' 



import { useContext } from "react"

import { LanguageContext } from "../context/LanguageContext"


const ProjectsCategories = () => {
    const { language } = useContext(LanguageContext)


    const lang = navigator.language.split('-')[0]

    const [selected, setSelected] = useState(false)

    console.log(lang);
    

    return (
        <div className="col-span-4 flex flex-col gap-y-6 h-86 ">
            <h2 className="underline text-4xl font-semibold mb-4">{translations[language].realLife.title}    !</h2>

            <div className="categories-list flex flex-col gap-y-2">
                {
                    translations[lang].realLife.categories.map((category) => {
                        return (
                            <CategoryHeader 
                                header={category}
                            />
                        )
                    })
                }
            </div>


        </div>
    )
}


export default ProjectsCategories