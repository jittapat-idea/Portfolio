import { data } from "../../contents/About"

const About = () => {
    return (
        <div className="space-y-3 px-2 scroll-m-14" id='About-section'>
            <img src={data.image} alt="profile" className='rounded-lg border-2 border-primaryContent' />
            <div className="text-primaryAccent font-medium">{data.title}</div>
            <div>{data.content}</div>
        </div>
    )
}

export default About 