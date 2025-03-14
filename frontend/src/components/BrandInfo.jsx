import { ZainTypoWhite } from "../constants/images";

import { translations } from "../data"


const BrandInfo = ({lang}) => {
    return (
        <div id="BrandInfo" className="flex flex-col gap-y-4">
            <img src={ZainTypoWhite} alt="" className="w-24" />
            <p className="font-light text-md text-justify">{translations[lang].footer.about}</p>
        </div>
    )
}

export default BrandInfo;