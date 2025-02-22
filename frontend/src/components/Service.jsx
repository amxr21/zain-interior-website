import translations from "../data";

const Lang = translations.en.services

const Service = ({bannerImage, serviceHeader, serviceDetails})  => {
    return (
        <div className="relative service bg-red-500 flex flex-col items-center justify-center">
            <div className="service-banner relative h-48 w-full overflow-hidden">
                <img className="absolute inset-x-0 -top-90 m-auto w-full" src={bannerImage} alt="" />
            </div>


            <div className="text absolute p-18 text-white w-full h-fit">
                <h2 className="service-header text-4xl font-normal mb-2">{serviceHeader}</h2>
                <p className="service-details font-light">{serviceDetails}</p>
            </div>

        </div>
    )
}

export default Service;