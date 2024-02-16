import { feedBackItem } from '@/lib/types'
import React, { useEffect, useState } from 'react'

type feedBackItemDisplay=feedBackItem & {
  id:string
}
const usefeedback = () => {
  const [feedbackItems,setFeedbackItems]=useState<feedBackItemDisplay[]>([])
  const [isLoading,setIsLoading]=useState(false)
  const [errorMessage,setErrorMessage]=useState("")
  useEffect(()=>{
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
    getFeedBackItems()
  },[])
  return (
    {
      feedbackItems,
      isLoading,
      errorMessage,
      setFeedbackItems
    }
  )
}

export default usefeedback