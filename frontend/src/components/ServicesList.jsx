import { Service } from './index'

import data from "../data"

const ServicesList = () => {
    return (
        <div id="ServicesList">
            {

                Object.entries(data.en.services.list).map((service, i) => {
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