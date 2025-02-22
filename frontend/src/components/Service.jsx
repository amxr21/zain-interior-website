import translations from "../data";

const Lang = translations.en.services

const Service = ()  => {
    return (
        <div className="service">
            <div className="image">
                <img src="" alt="" />
            </div>

            <div className="text">
                <h2 className="service-header"></h2>
                <p className="service-details"></p>
            </div>

        </div>
    )
}

export default Service;