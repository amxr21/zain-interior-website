import { useContext } from "react";
import { Section, ProjectsCategories, ProjectStudio } from "../components";


import { CategoriesContextWrapper } from "../context/CategoriesContext";




const Projects = () => {
    return (
        <CategoriesContextWrapper>
            <Section Id={"Projects"} Classes="sm:flex sm:flex-col lg:grid lg:grid-cols-12 gap-10 my-10 lg:my-0">
                <ProjectsCategories />
                <ProjectStudio />
            </Section>
        </CategoriesContextWrapper>
    )
}

export default Projects;