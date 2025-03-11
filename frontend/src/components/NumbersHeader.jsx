import { ZainTypo } from "../constants/images"

const NumbersHeader  = () => {
    return (
        <div className="flex gap-20">
            <div className="header">
                <img src={ZainTypo} alt="" className="w-64" />
            </div>
            <div className="numbers-info text-lg text-justify">At Zain Interior, we transform spaces into inspiring works of art. Design is our passion, blending style, creativity, innovation, and attention to detail to craft unforgettable environments that leave a lasting impression.</div>
        </div>
    )
}


export default NumbersHeader 