"use client"
import React, { useEffect, useMemo, useState } from 'react'
import Footer from './Footer';
import Container from './Container';
import HashtagList from './HashtagList';
import { feedBackItem } from '@/lib/types';
import usefeedback from '@/hooks/usefeedback';

type feedBackItemDisplay=feedBackItem & {
    id:string
  }

const App = () => {
  const {feedbackItems,isLoading,errorMessage,setFeedbackItems}= usefeedback()
  const [selectedCompany,setSelectedCompany]=useState("")
 
  const filteredItems=useMemo(()=> selectedCompany? 
  feedbackItems.filter(item=>item.companyName===selectedCompany):feedbackItems,
  [selectedCompany,feedbackItems])
  const companyList=useMemo(()=> feedbackItems.map(item=>item.companyName).
  filter((item,index,array)=>array.indexOf(item)===index),[feedbackItems])

  const handleCompanySelect=(company:string)=>{
    setSelectedCompany(company)
  }
 
  
  
  const handleAdd=async(item:string)=>{
        const cName=item.split(" ").find(wrd=>wrd.includes("#"))!.substring(1)    
        const nItem:feedBackItemDisplay={
            id:new Date().getTime().toString(),
            text:item,
            upvoteCount:0,
            companyName:cName,
            badgeLetter:cName.charAt(0),
            daysAgo:0
        }
        setFeedbackItems([...feedbackItems,nItem])
        const res = await fetch("http://localhost:3000/api/feedback", {
        method: "POST",
        body: JSON.stringify(nItem)
        });
        if(!res.ok){
            alert("Error Adding the Product")
        }
        else{
            const data = await res.json();
            console.log(data);
        }
  }


    return (
        <div className="app">
        <Footer />
    
        <Container feedbackItems={filteredItems} isLoading={isLoading} errorMessage={errorMessage} handleAdd={handleAdd}/>
    
        <HashtagList companyList={companyList} handleCompanySelect={handleCompanySelect}/>
      </div>
      );
}

export default App