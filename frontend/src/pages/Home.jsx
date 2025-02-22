import { Hero, About, Banner, Projects, Numbers, Services, Quote } from '../sections/index'

const Home = () => {

    return (
        <div className='hero h-[100vh]'>
            <Hero />
            <About />
            <Services />
            <Banner />
            <Projects />
            <Numbers />
        </div>
    )
}

export default Home 