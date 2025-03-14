import { useContext } from "react";
import { StarSeperator } from "../constants/images";
import { LanguageContext } from "../context/LanguageContext";

import { translations } from "../data";

const PostFooter = () => {

    const { language } = useContext(LanguageContext)



    return (
        <div className="flex gap-x-2 text-xs lg:text-lg w-full py-3 lg:py-4 text-center items-center justify-center border-t-[0.25px] border-grey-500">
            <p>{translations[language].footer.fromTo}</p>
            <img src={StarSeperator} alt="" />
            <p>{translations[language].footer.rights}</p>
        </div>
    )
}


export default PostFooter;