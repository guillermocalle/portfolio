import React from 'react'
import SectionTitle from './SectionTitle'
import skills from '../data/skills';
import SkillItem from './SkillItem'

const Skills = () => {
  return (
    <div className='py-12'>
      <SectionTitle>Skills & Tools</SectionTitle>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>
        {skills.map(skill => (
          <SkillItem
            key={skill.title}
            icon={skill.icon}
          ></SkillItem>
        ))}
      </div>
      
    </div>
  )
}

export default Skills