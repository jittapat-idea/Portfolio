import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const navs = [
    {
        title: 'About',
        sectionId: 'About-section'
    },
    {
        title: 'Experience',
        sectionId: 'Experience-section'
    },
    {
        title: 'Project',
        sectionId: 'Projects-section'
    },
    {
        title: 'Activities',
        sectionId: 'Activities-section'
    }
]

const Navbar = () => {
    const [isMouseEnter,setIsMouseEnter] = useState({});

    const handleClick = (sectionId) => {
        console.log(sectionId);
        document.getElementById(sectionId).scrollIntoView({behavior: 'smooth'});
    }
    return (
        <div className='flex flex-col gap-4 font-semibold'>
            {
                navs.map((e, i) =>(
                    <div key={`Nav-${e}-${i}`} 
                        onClick={() => handleClick(e.sectionId)} 
                        onMouseEnter={() => setIsMouseEnter({[e.title]:true})} 
                        onMouseLeave={() => setIsMouseEnter({[e.title]:false})} 
                        className=' cursor-pointer flex'  >
                        <div  className={`duration-500 ease-out ${isMouseEnter[e.title] ? 'translate-x-4' : ''} translate-all`}>{e.title}</div>
                        <div><FontAwesomeIcon className={`ml-2 text-primaryAccent translate-x-4 duration-500 ease-out ${isMouseEnter[e.title] ? 'opacity-100' : 'opacity-0'}` } icon={faArrowLeft}/></div>
                    </div>                
                ))
            }
        </div>
    )
}

export default Navbar;