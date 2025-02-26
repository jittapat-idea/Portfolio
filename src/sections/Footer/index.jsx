import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className="mb-5">
            <div className="flex justify-end">
                <span className="text-sm ">
                Powered by React.js and Tailwind 4.0
                <FontAwesomeIcon className="ml-2"icon={faGithub}/>
                </span>
            </div>
        </div>
    )
}
export default Footer;