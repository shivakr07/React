import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
      <div>I am Contact</div>
      <Link to='/home'>Home</Link> <br />
      <Link to='/about'> About Us</Link>
    </>
  )
}

export default Contact