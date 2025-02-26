import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <div className='flex items-end gap-5 text-3xl'>
        <a href='https://github.com/jittapat-idea' target='_blank' ><FontAwesomeIcon className='hover:scale-130  hover:text-primaryTitle duration-500' icon={faGithub} /></a>
        <a href='https://www.linkedin.com/in/jittapat-ausakul-a21626231/' target='_blank' ><FontAwesomeIcon className='hover:scale-130  hover:text-primaryTitle duration-500' icon={faLinkedin} /></a>
        
    </div>
  )
}

export default Contact;