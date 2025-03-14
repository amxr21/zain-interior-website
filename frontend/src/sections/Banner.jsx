import { BannerImage } from "../constants/images"

const Banner = ({containerClasses, header, subheader, lang}) => {
    return (
        <div className="relative">
            <div className="relative banner-image overflow-hidden h-36 lg:h-64 my-10 lg:my-20">
                <img src={BannerImage} alt="" className="absolute inset-0 object-cover w-full h-full" />
            </div>
            <div className={`banner-content ${lang == 'ar' ? 'font-[Doran]' : 'font-[Ivy-Presto-Display] italic'} text-white absolute left-0 top-0 w-full h-full flex flex-col lg:gap-y-6 justify-center px-8 lg:px-24  ${containerClasses}`}>
                <h2 className="text-2xl lg:text-5xl font-bold text-justify lg:text-left">{header}</h2>
                <h6 className="text-sm lg:text-xl font-thin">{subheader}</h6>
            </div>

            
        </div>
    )
}

export default Banner;