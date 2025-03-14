const NavLink = ({text, link}) => {
    return (
        <>
            <a href={`#${link}`} className="hidden lg:block font-extralight w-24 text-center">
                <p>{text}</p>

            </a>
        </>


    )
}


export default NavLink;