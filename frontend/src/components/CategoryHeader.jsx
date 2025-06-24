import { useRef, useContext } from "react"

import { CategoriesContext } from "../context/CategoriesContext" 


const CategoryHeader = ({selected, Classes, header, titleLink}) => {

    const { category, setCategory } = useContext(CategoriesContext)
    

    const categoryRef = useRef()

    const handleClick = (e) => {setCategory(categoryRef.current.id)}
 
    return (
        <div ref={categoryRef} id={titleLink} onClick={handleClick} className={`project-category text-[0.9rem] lg:text-xl ${category == titleLink ? "bg-[#EBD9B3] text-white" :"bg-transparent"} cursor-pointer px-2 py-1 rounded-md lg:p-2 ${Classes}`}>
            {header}
        </div>
    )
}


export default CategoryHeader