import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axios = () => {
    // to set any value / add any value,list,item we use useState hook
    // here we want to set the data that we are getting from the api
    const  [userData, setUserData] = useState([])
    // since the data we are getting in the form of array that's why we put the [] as initial value


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log(response)
            setUserData(response.data)
        })
    }, [])
  return ( 
    <div>Axios
        { userData.map((data) => {
            return(
                <div>{data.name} </div>
            )
        })}
    
    </div>
  )

}

export default Axios
