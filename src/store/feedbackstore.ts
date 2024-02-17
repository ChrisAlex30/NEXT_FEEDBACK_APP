import { feedBackItem } from "@/lib/types";
import { create } from "zustand";

type feedBackItemDisplay=feedBackItem & {
    id:string
  }
type TFeedbackStore={
    feedbackItems:feedBackItemDisplay[],
    isLoading:boolean,
    errorMessage:string,
    selectedCompany:string,
    getCompanyList:()=>string[],
    getFilteredItems:()=>feedBackItemDisplay[],
    handleCompanySelect:(company:string)=>void,
    handleAdd:(item:string)=>Promise<void>,
    getFeedBackItems:()=>Promise<void>
}  
export const FeedbackStore= create<TFeedbackStore>((set,get)=>({
    feedbackItems:[],
    isLoading:false,
    errorMessage:"",
    selectedCompany:"",
    getCompanyList:()=>get().feedbackItems.map(item=>item.companyName).
    filter((item,index,array)=>array.indexOf(item)===index),
    getFilteredItems:()=>{
        const state=get()
        return state.selectedCompany? 
        state.feedbackItems.filter(item=>item.companyName===state.selectedCompany):state.feedbackItems
    },
    handleCompanySelect:(company:string)=>set(()=>({selectedCompany:company})),
    handleAdd: async(item:string)=>{
        const cName=item.split(" ").find(wrd=>wrd.includes("#"))!.substring(1)    
        const nItem:feedBackItemDisplay={
            id:new Date().getTime().toString(),
            text:item,
            upvoteCount:0,
            companyName:cName,
            badgeLetter:cName.charAt(0),
            daysAgo:0
        }        
        set((state)=>({
            feedbackItems:[...state.feedbackItems,nItem]
        }))
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
    },
    getFeedBackItems:async()=>{
        set(()=>({isLoading :true}))
        try{
          const response=await fetch("http://localhost:3000/api/feedback")
          if (!response.ok) {
            throw new Error('Server Error');
          }
          const data=await response.json()
          set(()=>({feedbackItems:data}))
        }
        catch(error){
            set(()=>({errorMessage:"Server Error"}))
        }
        set(()=>({isLoading :false}))
      }

}))