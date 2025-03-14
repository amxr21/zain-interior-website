import { Section, BrandInfo, QuickLinks, GetInTouch, PostFooter } from "../components";
import { useContext } from "react"

import { translations } from "../data"

import { LanguageContext } from "../context/LanguageContext"



const Footer = () => {

    const { language } = useContext(LanguageContext)

    return (
        <footer id="Contact" className="bg-black text-white pt-4 lg:py-0">
            <Section Classes="grid lg:grid-cols-3 gap-x-8 lg:h-80">
                
                <BrandInfo lang={language} />

                <div className="flex gap-x-24">
                    <QuickLinks lang={language} header= {language=='ar' ? "روابط سريعةٍ": "Quick Links"} links={'quickLinks'}  />
                    <QuickLinks lang={language} header={language=='ar' ? "قانوني": "Legal"} links={'legal'}  />
                </div>
                
                <GetInTouch lang={language} />




            </Section>

            <PostFooter />



        </footer>
    )
}

export default Footer;