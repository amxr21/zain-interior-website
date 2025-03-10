const Number = ({ number, numberText, classes }) => {
    return (
        <div className={`flex flex-col items-center gap-y-3 py-4 ${classes}`}>
            <h2 className="text-8xl font-extrabold -ml-5">{number}</h2>
            <p className="text-2xl w-full text-center font-extralight">{numberText}</p>
        </div>
    )
}


export default Number;