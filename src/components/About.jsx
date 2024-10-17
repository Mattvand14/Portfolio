import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

import {SectionWrapper} from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", .5 * index, .75)}
        className='w-full bg-gradient-to-b from-[#7BAFD4] to-white p-[3px] rounded-[20px]
        shadow-card'
        >

          <div
            options={{
              max:45, 
              scale: 1,
              speed: 450
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12
            min-h-[280px] flex justify-evenly items-center flex-col'
          >

            <img src={icon} alt={title}
            className='w-30 h-60 object-contain'/>
            <h3 className='text-white text-[20px] 
            font-bold text-center'>{title}</h3>
          </div>
      
      
      </motion.div>
    
    
    
    
    </Tilt>

  )
}


const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>

    <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 text-secondary text-[17px]
      max-w-3xl leading-[30]px'
    >
      I am a student-athlete at the University of North Carolina at Chapel Hill, majoring in computer science. 
      I’m a swimmer, guitarist, and enjoy producing music in my spare time. 
      As a leader of the swim team, I have strong leadership skills and extensive experience in teamwork, 
      excelling both individually and as part of a group.
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
  

    </div>
    
    </>
  )
}

export default SectionWrapper(About, "about")