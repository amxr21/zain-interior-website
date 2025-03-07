import { createContext, useState } from "react"

const CategoriesContext = createContext()


const CategoriesContextWrapper = ({children}) => {
    const [category, setCategory] = useState('living room')

    return (
        <CategoriesContext.Provider value={{category, setCategory}}>
            {children}
        </CategoriesContext.Provider>
    )
}




export {CategoriesContext, CategoriesContextWrapper};