import { Section, AboutIntro, AboutStudio } from "../components";

const About = () => {
    return (
        <Section Id={"Story"} Classes={"mt-40"}>
            <AboutIntro /> 
            <AboutStudio />
        </Section>

    )
}

export default About;