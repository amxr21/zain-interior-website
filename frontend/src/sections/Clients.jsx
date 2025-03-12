import { Section } from "../components";

import { Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7 } from "../constants/images";

const Clients = () =>{
    const logos = [Logo2, Logo1, Logo5, Logo3, Logo5, Logo4, Logo6, Logo7]
    return (
        <Section Id={"Clients"} Classes={"bg-black flex  "}>

            <div className="text-white z-50 flex-1 flex flex-col gap-y-3">
                <h2 className="text-4xl font-bold">Our Clients</h2>
                <p className="text-xl font-thin">Trusted by leading brands and businesses across Saudi Arabia, delivering excellence in every project.</p>
            </div>


            <div className="grid grid-cols-4 gap-5 z-50 flex-2">
                {
                    logos.map((logoImage) => {
                        return (
                            <div className=" w-48 h-40">
                                <img src={logoImage} alt="" className="w-full" />
                            </div>
                        )
                    })
                }
            </div>
        </Section>
    )
}


export default Clients;