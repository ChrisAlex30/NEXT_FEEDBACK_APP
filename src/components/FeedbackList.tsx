"use client"
import React, { useEffect, useState } from 'react'
import FeedbackItem from './FeedbackItem'
import { feedBackItem } from '@/lib/types'
import Spinner from './Spinner'
import ErrorMessage from './ErrorMessage'


type feedBackItemDisplay=feedBackItem & {
  id:string
}
type FeedbackListProps={
  feedbackItems:feedBackItemDisplay[],
  isLoading:boolean,
  errorMessage:string
}
const FeedbackList = ({feedbackItems,isLoading,errorMessage}:FeedbackListProps) => {
  
  

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner/>}
      {errorMessage && <ErrorMessage msg={errorMessage}/>}
   {
    feedbackItems.length!==0 && feedbackItems.map(fbItem=><FeedbackItem key={fbItem.id} feedbackItem={fbItem}/>)
   }
  </ol>
  )
}

export default FeedbackList