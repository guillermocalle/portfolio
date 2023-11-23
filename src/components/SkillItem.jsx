import React from 'react'

function SkillItem({title, icon}) {
  return (
    <div className='bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-2 transform transition p-6 rounded-md flex items-center justify-center'>
      <div className='text-gray-800 dark:text-gray-300'>
        {icon}
      </div>    
    </div>
  )
}

export default SkillItem