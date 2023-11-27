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
    <div className='cubeFields'>
        <input placeholder='Enter input Cube' aria-label='Enter' className='userInputField' type="text" onChange={handleChange}/>
        <button onClick={getResponse} className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Test API</button>
        {cubeSolution}
      </div>
  )
}

export default Home