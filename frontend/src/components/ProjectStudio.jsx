import { useContext, useEffect, useRef } from "react"

import { images } from "../data"

import { CategoriesContext } from "../context/CategoriesContext"
import { LanguageContext } from "../context/LanguageContext"

const ProjectStudio = () => {

    const projectsStudio = useRef()
    

    const { language } = useContext(LanguageContext)

    const { category } = useContext(CategoriesContext)

    
    
        


    useEffect(() => {
        const element = projectsStudio.current;
        if (!element) return;
    
        let direction = 1; // 1 for right, -1 for left
        let animationId;
        let lastScrollPos = 0;
        let speed = 2; // Adjust scrolling speed (pixels per frame)
    
        // Initialize scroll position based on language
        language === 'ar' 
            ? element.scrollLeft = element.scrollWidth // Start from right for RTL
            : element.scrollLeft = 0; // Start from left for LTR
    
        const animate = () => {
            const maxScroll = element.scrollWidth - element.clientWidth;
            const currentScroll = element.scrollLeft;
    
            // Reverse direction when reaching boundaries
            if (currentScroll >= maxScroll - 1 || currentScroll <= 0) {
                speed *= 0.9; // Add slight deceleration effect
                direction *= -1;
            } else {
                speed = 2; // Reset to base speed
            }
    
            // Add smooth bounce effect when reversing
            const smoothStep = speed * direction + (currentScroll - lastScrollPos) * 0.3;
            element.scrollLeft += smoothStep;
    
            lastScrollPos = currentScroll;
            animationId = requestAnimationFrame(animate);
        };
    
        animationId = requestAnimationFrame(animate);
    
        return () => cancelAnimationFrame(animationId);
    }, [category, language]);
    





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