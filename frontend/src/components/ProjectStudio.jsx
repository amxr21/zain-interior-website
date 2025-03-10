import { useContext, useEffect, useRef } from "react"

import { images } from "../data"

import { CategoriesContext } from "../context/CategoriesContext"

const ProjectStudio = () => {

    const projectsStudio = useRef()
    


    const { category } = useContext(CategoriesContext)

    
    
        


        useEffect(() => {
            projectsStudio.current.scrollLeft = 0


            const scroll = () => {projectsStudio.current.scrollLeft += 1;}
            

            const interval = setInterval(scroll, 30)

            return () => clearInterval(interval)

        }, [category])






    return (
        <div className=" col-span-8">
            <div ref={projectsStudio} className="projects-studio flex gap-4 overflow-x-scroll pb-2 h-full">
                {
                    images[category]?.map((image) => {
                        return (
                            <div className="relative object-cover min-w-[28rem] w-[28rem] h-80 overflow-hidden bg-[#EBD9B3] rounded-lg">
                                <img src={image} alt={image} className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ProjectStudio