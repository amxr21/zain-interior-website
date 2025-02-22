import { Hero, About, Banner, Projects, Numbers, Services } from '../sections/index'

const HomeEN = () => {
    return (
        <div className='hero h-[100vh] bg-'>
            <Hero lang='en' />
            <About lang='en' />
            <Banner lang='en' />
            <Projects lang='en' />
            <Numbers lang='en' />
            <Services lang='en' />
        </div>
    )
}

export default HomeEN;