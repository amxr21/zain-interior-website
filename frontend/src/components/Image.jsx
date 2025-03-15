const Image = ({ link, alt, containerClasses, imgClasses }) => {
    return (
        <div className={containerClasses}>
            <img loading="lazy" src={link} alt={alt} className={imgClasses} />
        </div>
    )
}

export default Image;