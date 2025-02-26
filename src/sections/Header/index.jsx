import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import { data } from '../../contents/header'

const Header = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='text-4xl text-primaryTitle font-semibold'>{data.name}</div>
            <div className='text-primaryAccent font-semibold'>{data.status}</div>  
            <div className='text-sm'>{data.caption}</div>
            <div className='mt-4 '>
                <a href={data.resume} target='_blank' >
                    <span className='bg-primaryTitle text-primaryContent py-2 px-3 rounded-md hover:bg-primaryContent hover:text-primaryTitle duration-500'>
                        <span className='mr-2'><FontAwesomeIcon className='animate-bounce' icon={faCircleArrowDown} /></span>
                        {data.btnText}
                    </span>
                </a>
            </div>    
        </div>
    )
}

export default Header;