const NavLink = ({text, link}) => {
    return (
        // <Link className="font-extralight" to={`#${link}`}>
            <a href={`#${link}`} className="font-extralight">
                <p>{text}</p>

            </a>
        //* </Link> */}
    )
}


export default NavLink;