const Section = ({Id, Classes, children}) => {
    return (
        <div id={ Id } className={`px-10 lg:px-24 py-8 lg:py-20 gap-6  ${Classes}`} >
            {children}
        </div>
    )
}

export default Section;