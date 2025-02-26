import { data } from '../../contents/Profile_IMG'

const ProfileImage = () => {
    return (
        <div className=''>
            <img src={data.image} alt="profile" className='rounded-md border-2 border-primaryContent' />
        </div>
    )
}

export default ProfileImage