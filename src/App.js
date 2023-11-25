import React from 'react'
import api from './api/axiosConfig'
import Home from './components/home/Home'
import './App.css'
import LeftCubeFace from './components/cube/LeftCubeFace'
import { useState } from 'react'

const App = () => {

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
      setCubeSolution(response[1].replace(',', ''))
    )
    }


  return (
    <div className=' ' >
      <h1 className='text-4xl text-center p-1 text-sky-600'>Rubik's Cube Solver</h1>
      <div className='flex justify-center p-1'>
        <button onClick={getResponse} className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Test API</button>
      </div>
      <div>
        <input placeholder='Enter input Cube' aria-label='Enter' className='userInputField' type="text" onChange={handleChange}/>
      </div>
      <div>
        {parseResponse()}
      </div>
      <Home />
      <LeftCubeFace />
      <div>
        <p className='text-2xl text-center p-1 text-green-300'>Your solution will appear below:</p>
        <p>{cubeSolution}</p>
      </div>
    </div>
  )
}

export default App