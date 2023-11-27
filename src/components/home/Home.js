import React from 'react'
import './home.css';
import api from '../../api/axiosConfig'
import { useState } from 'react'

const Home = () => {
  const [cubeString, setCubeString] = useState('')
  const [cubeSolution, setCubeSolution] = useState('')

  const handleChange = (event) => {
    setCubeString(event.target.value)
  }
  
  const getResponse = async () => {
    try{
      const response = await api.get('/rubik/solve?cube=' + cubeString)
      console.log(response)
      parseResponse(response.data)
    }
    catch(error){
      console.log(error)
    }
  }

  const parseResponse = (response) => {
    if (response === undefined){
      return(
        <div></div>
      )
    }
    response = response.split(' ')
    console.log(response)
    console.log(response[1].replace(',', ''))
    return(
      setCubeSolution(response[1].replace(',', '').replace(/'/g, ''))
    )
    }
  return (
    <div className='homeContainer'>
      <div className='cubeStringFields'>
        <input placeholder='Enter input Cube' className='userInputField' type="text" onChange={handleChange}/>
      </div>
      <div className="userButtons responsive">
        <button onClick={getResponse} >Solve</button>
        <button onClick={getResponse} >Scramble</button>
        
      </div>
      {cubeSolution}
      </div>
  )
}

export default Home