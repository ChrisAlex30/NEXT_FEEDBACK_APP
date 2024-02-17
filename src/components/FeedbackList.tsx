"use client"
import React, { useEffect, useState } from 'react'
import FeedbackItem from './FeedbackItem'
import Spinner from './Spinner'
import ErrorMessage from './ErrorMessage'
import { FeedbackStore } from '@/store/feedbackstore'


const FeedbackList = () => {
  const feedbackItems =FeedbackStore(state=>state.getFilteredItems())
  const isLoading =FeedbackStore(state=>state.isLoading)
  const errorMessage =FeedbackStore(state=>state.errorMessage)
  

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