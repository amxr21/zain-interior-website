import { translations } from "../data";

const QuickLinks = ({header, links, lang}) => {    
    
    
    return (
        <div id="QuickLinks" className="flex flex-col gap-4">
            <h4 className="underline text-xl">{header}</h4>
            <ul className="flex flex-col gap-y-2 ml-4">
                {
                    translations[lang].footer[links].map((text) => 
                        <li className="text-white text-md font-[100]"><a href="">{text}</a></li>
                    )
                }
            </ul>
        </div>
    )
}


export default QuickLinks;