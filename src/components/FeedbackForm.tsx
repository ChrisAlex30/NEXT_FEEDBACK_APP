"use client"
import { MAX_CHARACTERS } from '@/lib/constant'
import React, { useState } from 'react'

const FeedbackForm = () => {
  const [text,setText]=useState("")
  const charCount=MAX_CHARACTERS-text.length

  const handleChange=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    if(e.target.value.length>MAX_CHARACTERS)
    return
    setText(e.target.value)
  }
  return (
    <form className='form'>
    <textarea
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