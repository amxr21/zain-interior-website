import { useState } from "react"
import translations from "../data"

import { CategoryHeader } from './index' 


const ProjectsCategories = () => {

    const lang = navigator.language.split('-')[0]

    const [selected, setSelected] = useState(false)

    console.log(lang);
    

    return (
        <div className="col-span-4 flex flex-col h-86 justify-between">
            <h2 className="underline text-3xl font-semibold">{translations[lang].realLife.title}    !</h2>

            <div className="categories-list flex flex-col gap-y-4">
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