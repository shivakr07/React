import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const About = () => {
  const location = useLocation();
  console.log(location.state)
  return (
    <>
      <div>I am About and my id is {location.state.id}</div>
      <Link to='/'>Home</Link> <br />
      <Link to='/contact'>Contact Us</Link>
    </>
  )
}

export default About