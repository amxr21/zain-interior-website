import Logo from "./Logo";

import NavLink from "./NavLink";

import { translations } from '../data'


const NavLinks = ({text, link}) => {
    const lang = navigator.language.split('-')[0]



    console.log(Object.values(translations[lang].navbar))



    
    
    return (
        <div className="flex items-center justify-between w-full text-white">
            {
                Object.entries(translations[lang].navbar).map((link, i) => {
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

        </div>
    )
}


export default NavLinks;