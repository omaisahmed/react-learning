import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Home() {
    const id = 5;
    const navigate = useNavigate();
    function goToAbout(){
     navigate('/about', {state: {id: id} });
    }
 
    function goToContact(){
     navigate('/contact');
    }

  return (
    <>
      <h1>HOME PAGE</h1>
      <button onClick={goToAbout} className='btn btn-primary'>About</button>
      <button onClick={goToContact} className='btn btn-success'>Contact</button>
    </>
  )
}
