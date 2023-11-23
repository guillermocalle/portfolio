import React from 'react'
import { TbWorld } from 'react-icons/tb'
import { FaGithub } from 'react-icons/fa';

function ProjectItem({image, title, tech, linkdemo, linkgithub}) {
  return (
    <div className='bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hidden'>

      <a href={linkdemo} target='_blank' rel='noreferrer'>

        <img src={image} alt={title} className='w-full h-36 md:h-48 object-cover' />
      </a>
      
      <div className='text-gray-600 dark:text-gray-300 p-5 w-full'>
        
        <div className='flex flex-wrap gap-6 flex-row items-center justify-between'>

          <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>{title}</h3> 
          
          <div className='flex flex-wrap gap-6 flex-row items-center justify-end'>

              <a href={linkdemo} target='_blank' rel='noreferrer' className='mb-2 md:mb-3'><TbWorld size={25} /></a>

              <a href={linkgithub} target='_blank' rel='noreferrer' className='mb-2 md:mb-3'><FaGithub size={25} /></a>

          </div>
          
        </div>
        
        <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
          {tech.map(item => (
            <span key={item}
              className='inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md'
            >
              {item}
            </span>
          ))}
        </p>  
      </div>
    </div>
  )
}

export default ProjectItem