const Section = ({Id, Classes, children}) => {
    return (
        <div id={ Id } className={`px-24 py-20 flex flex-col gap-6  ${Classes}`} >
            {children}
        </div>
    )
}

export default Section;