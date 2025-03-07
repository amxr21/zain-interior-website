import { BannerImage } from "../constants/images"

const Banner = ({containerClasses, header, subheader}) => {
    return (
        <div className="relative">
            <div className="relative banner-image overflow-hidden h-64">
                <img src={BannerImage} alt="" className="absolute inset-0 object-cover w-full h-full" />
            </div>
            <div className={`banner-content font-[Ivy-Presto-Display] text-white absolute left-0 top-0 w-full h-full flex flex-col gap-y-6 justify-center px-24 italic ${containerClasses}`}>
                <h2 className="text-5xl font-bold">{header}</h2>
                <h6 className="text-xl font-thin">{subheader}</h6>
            </div>

            
        </div>
    )
}

export default Banner;