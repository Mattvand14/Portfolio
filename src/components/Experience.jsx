import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import 'react-vertical-timeline-component/style.min.css';

import {styles} from '../styles';
import {experiences} from '../constants';
import {SectionWrapper} from '../hoc';
import { textVariant } from "../utils/motion";


const ExperienceCard = ({experience}) => (

  <VerticalTimelineElement
    contentStyle={ {background: '#7BAFD4', 
      color: '#fff'
    }}
    contentArrowStyle={{ borderRight: '7px solid #232631'}}
    date={experience.date}
    iconStyle={{ background: experience.iconBg}}
    icon={
      <div className="flex justify-center items-center
      w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[100%] h-[100%]
          object-contain"
          />
      </div>
    }
    >
      <div>
        <h3 className="text-white text-[24px] 
        font-bold">{experience.title}</h3>
        <p className="text-white text-[16px] 
        font-semibold" style={{margin:0}}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) =>(
          <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px]
          pl-1 tracking-wider">
            {point}
          </li>

        ))}

      </ul>
    </VerticalTimelineElement>

)


const Experience = () => {
  return (
    <>
    <motion.div 
    variants={textVariant()} //make it so p tags are animated    
    >
      <p className={styles.sectionSubText}>Experience and Accomplishments</p>
      <h2 className={styles.sectionHeadText}>Academics and Athletics</h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} 
          experience={experience}/>
        ))}
      </VerticalTimeline>

    </div>


    </>
  )
}

export default SectionWrapper(Experience, '')