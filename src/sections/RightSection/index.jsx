import ContentContainer from "../../conponents/ContentContainer"
import { data as ExperienceData} from "../../contents/experience"
import { data  as ProjectData} from "../../contents/project"
import { data as ActivitiesData} from "../../contents/Activities"
import About from "../About"
import Footer from "../Footer"


const RightSection = () => {
    return (
        <div className="grid gap-y-30 px-4">
            <About />

            <ContentContainer 
                title="Experience" 
                data={ExperienceData}
            />

            <ContentContainer 
                title="Projects" 
                data={ProjectData}
            />

            <ContentContainer 
                title="Activities" 
                data={ActivitiesData}
            />

            <Footer/>
        </div>
    )
}

export default RightSection