import { Service } from './index'

import { translations } from "../data"
import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"


const ServicesList = () => {
    const { language } = useContext(LanguageContext)



    return (
        <div id="ServicesList">
            {

                Object.entries(translations[language].services.list).map((service, i) => {
                    return (
                        <Service
                            key={i}
                            bannerImage={service[1].banner}
                            serviceHeader={service[1].title}
                            serviceDetails={service[1].brief}
                        />
                    )
                })

            }


        </div>
    )
}

export default ServicesList;