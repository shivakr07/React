import React, { useContext } from 'react'
import {data,data1} from '../App'

const First = () => {
  const firstName = useContext(data);
  const role = useContext(data1);
  return (
    <>
    <h1>my name is {firstName} and i am known as {role}</h1>
    </>
  )
}

export default First