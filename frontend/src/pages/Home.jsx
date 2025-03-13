import { Hero, About, Banner, Projects, Numbers, Services, Quote, Footer, Clients } from '../sections/index'
import { useContext } from "react"

import { translations } from "../data"

import { LanguageContext } from "../context/LanguageContext"

const Home = () => {

    const { language } = useContext(LanguageContext)



    return (
        <div className=' '>
            <Hero />
            <About />
            <Services />
            <Banner
                containerClasses={""} 
                header={translations[language].consultation.title}
                subheader={translations[language].consultation.subtitle}
                lang={language}
            />
            <Projects />

            <Clients />

            <Numbers />
        </div>
    )
}

export default Home 