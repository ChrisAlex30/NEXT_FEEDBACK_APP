"use client"
import Footer from './Footer';
import Container from './Container';
import HashtagList from './HashtagList';
import { FeedbackStore } from '@/store/feedbackstore';
import { useEffect } from 'react';



const App = () => {
  
  const getFeedBackItems =FeedbackStore(state=>state.getFeedBackItems)

  useEffect(()=>{getFeedBackItems()})

    return (
        <div className="app">
        <Footer />
    
        <Container />
    
        <HashtagList />
      </div>
      );
}

export default App