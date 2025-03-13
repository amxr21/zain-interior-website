const NavLink = ({text, link}) => {
    return (
        // <Link className="font-extralight" to={`#${link}`}>
            <a href={`#${link}`} className="font-extralight w-24 text-center">
                <p>{text}</p>

            </a>
        //* </Link> */}
    )
}


export default NavLink;