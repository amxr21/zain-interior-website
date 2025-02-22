import { Section } from "../components";



const Services = () => {

    

    return (
        <Section Id={'Services'} Classes={'flex-row gap-x-8'}>
            <div className="flex h-fit gap-x-4 flex-1 about-header text-4xl font-bold uppercase">
                <p>About Zain interior</p>
                <div className="grow text-[#FFFAF3] border-b-black border-b">....</div>
            </div>
            <p className="flex-1 about-text text-justify text-lg font-light uppercase">We ensure to deliver the best quality for our clients through our services. We ensure to deliver the best quality for our clients through our services. </p>


        </Section>
    )
}

export default Services;