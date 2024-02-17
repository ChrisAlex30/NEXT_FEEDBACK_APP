import { FeedbackStore } from '@/store/feedbackstore'
import React from 'react'


const HashtagList = () => {
  const companyList =FeedbackStore(state=>state.getCompanyList())
  const handleCompanySelect =FeedbackStore(state=>state.handleCompanySelect)

  return (
    <ul className='hashtags'>
      {
        companyList.map(name=><li key={name}><button onClick={()=>handleCompanySelect(name)}>#{name}</button></li>)
      }
    </ul>
  )
}

export default HashtagList