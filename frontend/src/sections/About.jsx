import { Section, AboutIntro, AboutStudio } from "../components";

const About = () => {
    return (
        <Section Id={"Story"} Classes={"mt-20 lg:mt-40 flex flex-col"}>
            <AboutIntro /> 
            <AboutStudio />
        </Section>

    )
}

export default About;