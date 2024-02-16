"use client"
import { MAX_CHARACTERS } from '@/lib/constant'
import React, { useRef, useState } from 'react'

type FeedbackFormProps={
  handleAdd:(item:string)=>void
}
const FeedbackForm = ({handleAdd}:FeedbackFormProps) => {
  const inputRef=useRef<HTMLTextAreaElement>(null)
  const [text,setText]=useState("")
  const [showValid,setShowValid]=useState(false)
  const [showInvalid,setShowInvalid]=useState(false)
  const charCount=MAX_CHARACTERS-text.length

  const handleChange=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    if(e.target.value.length>MAX_CHARACTERS)
    return
    setText(e.target.value)
  }
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      if(text.includes("#") && text.length>=10){
          setShowValid(true)
          handleAdd(text)
          setText("")
          setTimeout(() => {
            setShowValid(false)
          }, 2000);
      }
      else{
        setShowInvalid(true)
        inputRef.current?.focus()
        setTimeout(() => {
          setShowInvalid(false)
        }, 2000);
      }
      
  }
  return (
    <form onSubmit={handleSubmit} className={`form ${showValid && "form--valid"} ${showInvalid && "form--invalid"}`}>
    <textarea
      ref={inputRef}
      value={text}
      onChange={(e)=>handleChange(e)}
      id="feedback-textarea"
      placeholder="blabla"
      spellCheck={false}
    />

    <label htmlFor="feedback-textarea">
      Enter your feedback here, remember to #hashtag the company
    </label>

    <div>
      <p className="u-italic">{charCount}</p>
      <button>
        <span>Submit</span>
      </button>
    </div>
  </form>
  )
}

export default FeedbackForm