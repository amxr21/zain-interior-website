import { createContext, useState } from "react";

const LanguageContext = createContext()



const LanguageContextWrapper = ({children}) => {
    const [ language, setLanguage ] = useState(navigator.language.split('-')[0])

    language == 'ar' ? document.querySelector('html').dir = 'rtl' : document.querySelector('html').dir = 'ltr'


    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>



    )
}

export { LanguageContext, LanguageContextWrapper }