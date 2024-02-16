import React from 'react'
import Header from './Header'
import FeedbackList from './FeedbackList'
import { feedBackItem } from '@/lib/types'

type feedBackItemDisplay=feedBackItem & {
  id:string
}
type ContainerProps={
  feedbackItems:feedBackItemDisplay[],
  isLoading:boolean,
  errorMessage:string,
  handleAdd:(item:string)=>void
}

const Container = ({feedbackItems,isLoading,errorMessage,handleAdd}:ContainerProps) => {
  return (
    <div className="container">
      <Header handleAdd={handleAdd} />
      <FeedbackList feedbackItems={feedbackItems} isLoading={isLoading} errorMessage={errorMessage}/>
    </div>
  )
}

export default Container