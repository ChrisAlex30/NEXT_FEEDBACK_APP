import React from 'react'
import Pattern from './Pattern'
import Logo from './Logo'
import PageHeading from './PageHeading'
import FeedbackForm from './FeedbackForm'

type HeaderProps={
  handleAdd:(item:string)=>void
}
const Header = ({handleAdd}:HeaderProps) => {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm handleAdd={handleAdd}/>
    </header>
  )
}

export default Header