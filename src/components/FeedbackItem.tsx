import { feedBackItem } from "@/lib/types";
import { TriangleUpIcon } from "@radix-ui/react-icons";
import React, { useState } from 'react'



type FeedbackItemProps={
    feedbackItem:feedBackItem
}

const FeedbackItem = ({feedbackItem}:FeedbackItemProps) => {
  const [open,setOpen]=useState(false)
  const [upvoteCount,setUpvoteCount]=useState(feedbackItem.upvoteCount)
 const handleUpvote=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
  setUpvoteCount(prev=>++prev)
  e.currentTarget.disabled=true
  e.stopPropagation()
 }
 const days=feedbackItem.createdAt ? 
 Math.round((new Date().getTime()-new Date(feedbackItem.createdAt).getTime())/(24 * 60 * 60 * 1000)):0
  return (
    <li onClick={()=>setOpen(prev=>!prev)} className={`feedback ${open && "feedback--expand"}`}>
    <button onClick={handleUpvote}>
      <TriangleUpIcon />
      <span>{upvoteCount}</span>
    </button>

    <div>
      <p>{feedbackItem.badgeLetter}</p>
    </div>

    <div>
      <p>{feedbackItem.companyName}</p>
      <p>{feedbackItem.text} </p>
    </div>
    
    <p>{days===0?"NEW":`${days}d`}</p>
    

  </li>
  )
}

export default FeedbackItem