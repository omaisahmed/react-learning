import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function About() {
    const location = useLocation();
  return (
    <>
      <h1>ABOUT PAGE</h1>
      <h1><Link to='/'>Home</Link>(this page id id {location.state.id})</h1>
      <h1><Link to='/contact'>Contact Us</Link></h1>
    </>
  )
}
