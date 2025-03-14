import { useRef } from "react";
import { translations } from "../data";

const Lang = translations.en.services

const Service = ({bannerImage, serviceHeader, serviceDetails})  => {

    const serviceRef = useRef()

    const handleHover = (e) => {
        return serviceRef.current.firstElementChild.classList.contains('lg:h-12')
        ? serviceRef.current.firstElementChild.classList.replace('lg:h-12', 'h-20')
        : serviceRef.current.firstElementChild.classList.replace('h-20', 'lg:h-12')
    }





    return (
        <div className="relative service bg-biege-500 flex flex-col items-center justify-center">
            <div className="service-banner relative h-30 lg:h-44 w-full overflow-hidden">
                <img className="absolute object-cover inset-x-0 lg:-top-90 m-auto w-full" src={bannerImage} alt="" />
            </div>


            <div ref={serviceRef} onMouseEnter={handleHover} onMouseLeave={handleHover} className="service flex items-center justify text absolute p-8 lg:p-18 text-white w-full h-full overflow-hidden">
                <div className="service-info h-9 lg:h-12 overflow-hidden">
                    <h2 className="service-header text-2xl lg:text-4xl font-normal mb-2">{serviceHeader}</h2>
                    <p className="service-details text-sm lg:text-md font-light">{serviceDetails}</p>

                </div>
            </div>

        </div>
    )
}

export default Service;