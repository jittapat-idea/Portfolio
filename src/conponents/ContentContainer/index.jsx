/*
<ContenContainer
  title="Title"
  data={[]}
/>
*/

import { useState } from 'react';
import FormatDate from '../FormatDate'
import Picture from '../Picture';
import TitleLink from '../TitleLink';
import Material from '../Material';
import Description from '../Description';
import Tech from '../Tech';

const ContentContainer = ({title: sectionTitle = "" ,data = []}) => {

    const [isMouseEnter, setIsMouseEnter] = useState({});

    const SECTION_ID = `${sectionTitle}-section`;
    return (
        <div id={SECTION_ID} className='scroll-m-14'>
            <div className="text-primaryAccent px-2 font-medium mb-4">
                { sectionTitle }
            </div>
            {
                data.map(({date = "",title = "",link = "",material = [],description = [],skills = [],picture = ""},index) => (

                    <div key={`${SECTION_ID}-${index}-${title.replaceAll(" ","")}`} className={`grid grid-cols-[25%_75%] duration-500 ${isMouseEnter[`${SECTION_ID}-${index}`]?"bg-primarySubcontent":""}  px-2 py-5 rounded-md `} 
                    onMouseEnter={() => setIsMouseEnter({[`${SECTION_ID}-${index}`]:true})} 
                    onMouseLeave={() => setIsMouseEnter({[`${SECTION_ID}-${index}`]:false})}>
                    <div >
                        <FormatDate isHightlight = {isMouseEnter[`${SECTION_ID}-${index}`]}>{date}</FormatDate>
                        <Picture source={picture} alt={'EMR Soft'}/>    
                    </div>

                    <div className="grid gap-y-4">
                        <TitleLink isHightlight={isMouseEnter[`${SECTION_ID}-${index}`]} title={title} link={link}/>
                        <div className="flex text-xl items-center">
                            {
                                material.map((item,index) => (
                                    <Material key={`${item}-Material-${index}`} link={item.link} icon={item.type}/>
                                ))
                            }
                        </div>
                        {
                            description.map((item,index) => (
                                <Description key={`${item}-Description-${index}`} description={item}/>
                            ))
                        }
                        {
                            skills.map((item,index) => (
                                <Tech key={`${item}-skills-${index}`} data={item}/>
                            ))
                        }
                    </div>
                </div> 
                ))
            }  
        </div>
    )
}

export default ContentContainer;