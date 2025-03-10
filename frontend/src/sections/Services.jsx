import { Section, ServicesIntro, ServicesList } from "../components";



const Services = () => {

    

    return (
        <Section Id={'Services'} Classes={'flex flex-col gap-8'}>
            <ServicesIntro />
            <ServicesList />
        </Section>
    )
}

export default Services;