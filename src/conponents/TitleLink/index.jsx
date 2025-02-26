import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"

const TitleLink = ({isHightlight, title, link}) => {
    if(!link){
        return (
            <div className={`${isHightlight ? "text-primaryAccent":""} font-semibold`}>
                {title}
            </div>
        )
    }
    return (
        <div className={`${isHightlight ? "text-primaryAccent":""} font-semibold`}>
            <a href={link} target='_blank' >
                {title}
                <FontAwesomeIcon className={`ml-2 text-xs duration-200 ease-out ${isHightlight ? " translate-x-1 -translate-y-1":""}`} icon={faLink} />
            </a>
        </div>
    )
}

export default TitleLink