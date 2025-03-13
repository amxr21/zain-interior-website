import { NavLinks, TranslateButton } from "./index";


const NavBar = () => {
    return (
        <nav className="absolute w-full h-42 bg-[transparent] px-[6.5%] gap-x-20 flex items-center justify-between z-[99999] ">
            <TranslateButton />
            <NavLinks />
            
        </nav>
    )
}

export default NavBar;