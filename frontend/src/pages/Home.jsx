import { Hero, About, Banner, Projects, Numbers, Services, Quote, Footer } from '../sections/index'

const Home = () => {

    return (
        <div className=' '>
            <Hero />
            <About />
            <Services />
            <Banner
                containerClasses={""} 
                header='Book your consultation session now'
                subheader='Book you consultation session now'
            />
            <Projects />
            <Numbers />
        </div>
    )
}

export default Home 