import Stars from "../assets/images/stars.png"


const HeroCard = () => {
    return (
        <div className="hero-section flex flex-col items-center justify-center bg-[rgb(128,128,128,0.5)] w-11/12 h-11/12 rounded-3xl p-20 gap-y-16 backdrop-blur-[60px]">
            <div className="pt-10 flex flex-col items-center gap-y-16">
                <div className="text-center flex flex-col gap-y-10">
                    <h1 className="text-9xl font-black font-[Doran] text-white">We Design pure ART</h1>
                    <p className="text-3xl italic font-[Doran] font-normal text-white">“Because every detail matter”</p>
                </div>

                <div className="div">
                    <img src={Stars} alt="" className="starts" />
                </div>

            </div>
        </div>
    )
}

export default HeroCard