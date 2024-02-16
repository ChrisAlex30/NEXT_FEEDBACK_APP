import React from 'react'

type HashtagListProps={
  companyList:string[]
  handleCompanySelect:(company:string)=>void
}
const HashtagList = ({companyList,handleCompanySelect}:HashtagListProps) => {
  return (
    <ul className='hashtags'>
      {
        companyList.map(name=><li key={name}><button onClick={()=>handleCompanySelect(name)}>#{name}</button></li>)
      }
    </ul>
  )
}

export default HashtagList