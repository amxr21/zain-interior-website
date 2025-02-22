import { NavLinks } from "./index";


const NavBar = () => {
    return (
        <nav className="absolute w-full h-40 bg-[transparent] px-24 gap-x-20 flex justify-between z-[99999]">
            <NavLinks />
        </nav>
    )
}

export default NavBar;