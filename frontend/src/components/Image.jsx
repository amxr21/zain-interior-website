const Image = ({ link, alt, containerClasses, imgClasses }) => {
    return (
        <div className={containerClasses}>
            <img src={link} alt={alt} className={imgClasses} />
        </div>
    )
}

export default Image;