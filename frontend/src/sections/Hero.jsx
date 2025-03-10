import { Quote, HeroCard } from "../components/index";

const Hero = () => {
    return (
        <div className="w-full hero h-[100vh] flex flex-col items-center justify-center relative">
            
            <HeroCard />

            <Quote />
        </div>
    )
}

export default Hero;