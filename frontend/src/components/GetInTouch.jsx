import { translations } from "../data";
import Connect from "./Connect";

const GetInTouch = ({lang}) => {
    return (
        <div className="GetInTouch flex flex-col gap-y-3 lg:gap-4">
            <div className="flex flex-col gap-2 lg:gap-4">
                <h2 className="underline text-md lg:text-xl">{translations[lang].footer.contact.title}</h2>
                <p className="text-sm lg:text-lg text-justify" >{translations[lang].footer.contact.location}</p>
            </div>
            
            <Connect language={lang} />


        </div>
    )
}


export default GetInTouch;