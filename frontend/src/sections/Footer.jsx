import { Section, BrandInfo, QuickLinks, GetInTouch } from "../components";

import { StarSeperator } from "../constants/images";

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <Section Classes="grid grid-cols-3 gap-x-8 h-80">
                
                <BrandInfo />

                <div className="flex gap-x-24">
                    <QuickLinks header="Quick Links" links={'quickLinks'}  />
                    <QuickLinks header="Legal" links={'legal'}  />
                </div>
                
                <GetInTouch />




            </Section>
            <div className="flex gap-x-2 w-full py-4 text-center items-center justify-center border-t-[0.25px] border-grey-500">
                <p>From Jeddah to the world</p>
                <img src={StarSeperator} alt="" />
                <p>All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;