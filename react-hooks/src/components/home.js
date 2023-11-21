import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Home = () => {
  const id = 5;
  const navigate = useNavigate()
  function goToAbout(){
    navigate("/about", {state : {id : id}})
  }
  return (
    <>
      <div>Home, sweet Home</div>
      {/* <Link to='/about'>About Us</Link> <br />
      <Link to='/contact'>Contact Us</Link> */}

      <button onClick={goToAbout}>About</button>
    </>
  )
}

export default Home