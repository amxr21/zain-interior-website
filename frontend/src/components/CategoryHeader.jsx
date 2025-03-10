import { useRef, useContext } from "react"

import { CategoriesContext } from "../context/CategoriesContext" 


const CategoryHeader = ({selected, Classes, header}) => {

    const { category, setCategory } = useContext(CategoriesContext)
    

    const categoryRef = useRef()

    const handleClick = (e) => {setCategory(categoryRef.current.textContent)}
 
    return (
        <div ref={categoryRef} onClick={handleClick} className={`project-category text-lg ${category == header ? "bg-[#EBD9B3] text-white" :"bg-transparent"} cursor-pointer p-2 ${Classes}`}>
            {header}
        </div>
    )
}


export default CategoryHeader