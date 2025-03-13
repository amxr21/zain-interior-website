import { translations } from "../data";
import Connect from "./Connect";

const GetInTouch = ({lang}) => {
    return (
        <div className="GetInTouch">
            <div className="flex flex-col gap-4">
                <h2 className="underline text-xl">{translations[lang].footer.contact.title}</h2>
                <p>{translations[lang].footer.contact.location}</p>
            </div>
            
            <Connect />


        </div>
    )
}


export default GetInTouch;