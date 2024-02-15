import { feedBackItem } from "@/lib/types";
import { TriangleUpIcon } from "@radix-ui/react-icons";
import React from 'react'



type FeedbackItemProps={
    feedbackItem:feedBackItem
}

const FeedbackItem = ({feedbackItem}:FeedbackItemProps) => {
  return (
    <li className="feedback">
    <button>
      <TriangleUpIcon />
      <span>{feedbackItem.upvoteCount}</span>
    </button>

    <div>
      <p>{feedbackItem.badgeLetter}</p>
    </div>

    <div>
      <p>{feedbackItem.companyName}</p>
      <p>{feedbackItem.text} </p>
    </div>

    <p>{feedbackItem.daysAgo}d</p>
  </li>
  )
}

export default FeedbackItem