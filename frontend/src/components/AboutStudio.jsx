import { Image1, Image2, Image3, Image4, Image5, Image6, Image7 } from "../assets/images/about/images"
const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7]

import { Image } from "./index"

const AboutStudio = () => {
    return (
        <div className="grid grid-cols-5 gap-x-0 gap-y-0">
            {
                images.map((image,index) => {
                    return (
                        <>
                            <Image key={index} link={image} imgClasses="absolute min-w-full min-h-full object-cover " containerClasses="h-72 bg-red-500 relative overflow-hidden" />
                        </>
                    )
                })
            }
        </div>
    )
}

export default AboutStudio;