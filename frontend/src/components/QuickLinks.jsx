import { translations } from "../data";

const QuickLinks = ({header, links, lang}) => {    
    
    
    return (
        <div id="QuickLinks" className="flex flex-col gap-2 lg:gap-4">
            <h4 className="underline text-md lg:text-xl">{header}</h4>
            <ul className="flex flex-col lg:gap-y-2 lg:ml-4">
                {
                    translations[lang].footer[links].map((text) => 
                        <li className="text-white text-sm lg:text-lg font-light"><a href="">{text}</a></li>
                    )
                }
            </ul>
        </div>
    )
}


export default QuickLinks;