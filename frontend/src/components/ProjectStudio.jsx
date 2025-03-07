import { useContext } from "react"

import { CategoriesContext } from "../context/CategoriesContext"

const ProjectStudio = () => {

    const { category } = useContext(CategoriesContext)

    const images = 
        {
            "Living Room" : [
                "A",
                "",
                "",
                "",
            ],
            "Dining Room" : [
                "b",
                "",
                "",
                "",
            ],
            "Office" : [
                "c",
                "",
                "",
                "",
            ],
            "Kitchen" : [
                "d",
                "",
                "",
                "",
            ],
            "Coffee corners" : [
                "dd",
                "",
                "",
                "",
            ],
        }
    

    return (
        <div className=" col-span-8">
            <div className="projects-studio flex gap-4 overflow-x-scroll pb-2 h-full">
                {
                    images[category]?.map((image) => {
                        return (
                            <div className="min-w-[28rem] min-h-full bg-[#EBD9B3] rounded-lg">
                                <img src="" alt={image} />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ProjectStudio