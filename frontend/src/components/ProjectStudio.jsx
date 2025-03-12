import { useContext, useEffect, useRef } from "react"

import { images } from "../data"

import { CategoriesContext } from "../context/CategoriesContext"

const ProjectStudio = () => {

    const projectsStudio = useRef()
    


    const { category } = useContext(CategoriesContext)

    
    
        


    useEffect(() => {
        let direction = 1; // 1 for forward, -1 for backward
        projectsStudio.current.scrollLeft = 0; // Start from the beginning
    
        const scroll = () => {
            const maxScroll = projectsStudio.current.scrollWidth - projectsStudio.current.clientWidth;
    
            if (projectsStudio.current.scrollLeft >= maxScroll) {
                direction = -1; // Reverse direction when reaching the end
            } else if (projectsStudio.current.scrollLeft <= 0) {
                direction = 1; // Reverse direction when reaching the start
            }
    
            projectsStudio.current.scrollLeft += direction * 5; // Adjust speed
        };
    
        const interval = setInterval(scroll, 20);
    
        return () => clearInterval(interval);
    }, [category]);
    





    return (
        <div className=" col-span-8">
            <div ref={projectsStudio} className="projects-studio flex gap-4 overflow-x-scroll pb-2 h-full">
                {
                    images[category]?.map((image) => {
                        return (
                            <div className="relative object-cover min-w-[30rem] w-[30rem] h-96 overflow-hidden bg-[#EBD9B3] rounded-lg">
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