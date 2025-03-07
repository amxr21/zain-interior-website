import { useContext } from "react";
import { Section, ProjectsCategories, ProjectStudio } from "../components";


import { CategoriesContextWrapper } from "../context/CategoriesContext";


const Projects = () => {
    return (
        <CategoriesContextWrapper>
            <Section Id="Projects" Classes="grid grid-cols-12">
                <ProjectsCategories />
                <ProjectStudio />
            </Section>
        </CategoriesContextWrapper>
    )
}

export default Projects;