import Logo from "./Logo";

import NavLink from "./NavLink";

import { translations } from '../data'
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import BurgerButton from "./BurgerButton";


const NavLinks = ({text, link}) => {
    const lang = navigator.language.split('-')[0]



    console.log(Object.values(translations[lang].navbar))


    const { language } = useContext(LanguageContext)
    
    
    return (
        <div className="flex items-center justify-between w-full text-white">
            {
                Object.entries(translations[language].navbar).map((link, i) => {
                    return (
                            i + 1  == 3
                            ?
                            <>
                                <NavLink key={i} link={link[0]} text={link[1]} />
                                <Logo />
                            </>             
                            :
                            <>
                                <NavLink key={i} link={link[0]} text={link[1]} /> 
                            </>             
                        
                    )
                })
            }
            <BurgerButton />

        </div>
    )
}


export default NavLinks;