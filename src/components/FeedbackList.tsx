"use client"
import React, { useEffect, useState } from 'react'
import FeedbackItem from './FeedbackItem'
import { feedBackItem } from '@/lib/types'
import Spinner from './Spinner'
import ErrorMessage from './ErrorMessage'

// const FeedbackItemsArray=[{
// upvoteCount:555,
// badgeLetter:"S",
// companyName:"Starbucks",
// text:"test test test",
// daysAgo:4
// },{
//   upvoteCount:123,
//   badgeLetter:"M",
//   companyName:"Mackys",
//   text:"test test test",
//   daysAgo:1
// },{
//   upvoteCount:45,
//   badgeLetter:"Z",
//   companyName:"Zohans",
//   text:"test test test",
//   daysAgo:6
// }]

type feedBackItemDisplay=feedBackItem & {
  id:string
}
const FeedbackList = () => {
  const [feedbackItems,setFeedbackItems]=useState<feedBackItemDisplay[] | null>([])
  const [isLoading,setIsLoading]=useState(false)
  const [errorMessage,setErrorMessage]=useState("")
  // const getFeedBackItems=()=>{
  //   setIsLoading(true)
  // fetch("http://localhost:3000/api/feedback").then((response) => {
  //   if (response.ok) {
  //     return response.json();
  //   }
  //   throw new Error('Server Error');
  // })
  // .then((responseJson) => {    
  //   setFeedbackItems(responseJson)
  //   setIsLoading(false)
  // })
  // .catch((error) => {
  //   console.log(error)
  //   setErrorMessage("Server Error")
  //   setIsLoading(false)
  // });
  // }
  const getFeedBackItems=async()=>{
    setIsLoading(true)
    try{
      const response=await fetch("http://localhost:3000/api/feedback")
      if (!response.ok) {
        throw new Error('Server Error');
      }
      const data=await response.json()
      setFeedbackItems(data)
    }
    catch(error){
      setErrorMessage("Server Error")
    }
    setIsLoading(false)
  }
useEffect(()=>{
  
  getFeedBackItems()
},[])

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner/>}
      {errorMessage && <ErrorMessage msg={errorMessage}/>}
   {
    feedbackItems && feedbackItems.length!==0 && feedbackItems.map(fbItem=><FeedbackItem key={fbItem.id} feedbackItem={fbItem}/>)
   }
  </ol>
  )
}

export default FeedbackList