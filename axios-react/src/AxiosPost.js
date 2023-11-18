import React, { useState } from 'react'
import axios from 'axios';

const AxiosPost = () => {
    const data = {fname : "", lastName : ""};
    const [inputData, setInputData] = useState(data);

    const handleData= (e) => {
        setInputData({...inputData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users", inputData)
        .then((response) => {
            console.log(response)
        })
    }
  return (
    <>
        {/* form  */}
        <label>First Name</label>
        <input type='text' name='fname' value={inputData.fname} onChange={handleData}></input><br/> <br/>
        <label>Last Name</label>
        <input type='text' name='lastName' value ={inputData.lastName} onChange={handleData}></input><br/>

        <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default AxiosPost