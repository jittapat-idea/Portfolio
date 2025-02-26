import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Material = ({link,icon}) => {
    return (
        <a href={link} target='_blank' className='hover:scale-110'><FontAwesomeIcon icon={icon} /></a>
    )
}

export default Material