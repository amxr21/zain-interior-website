import { translations } from "../data";

import { ConnectMedia } from "./index";

const Connect = ({ language }) => {
    return (
        <div id="Connect" className="flex gap-x-8 ">
            <h2 className="font-semibold">{language == 'ar' ? "أقرب" : 'Connect'}:</h2>
            <ul className="flex gap-x-2 grow justify-between font-extralight">
                {
                    Object.entries(translations[language].footer.contact.connect).map((connectMedia) => {
                        return (
                            <ConnectMedia key={connectMedia} link={connectMedia[1]} title={connectMedia[0]}/>
                        )
                    })
                }</ul>
        </div>
    )
}


export default Connect;