import React from 'react'
import './home.css';
import api from '../../api/axiosConfig'
import { useState } from 'react'
import Cube from '../cube/Cube';
import RotationsText from '../rotationsText/RotationsText';
import RotationButtons from '../rotationButtons/RotationButtons';

const Home = () => {
  const validCubeStringLength = 54
  const regex = new RegExp('[^rbgoyw]');
  const [cubeString, setCubeString] = useState('gggggggggbbbbbbbbbrrrrrrrrroooooooooyyyyyyyyywwwwwwwww')
  const [cubeSolution, setCubeSolution] = useState('')
  const [isSolving, setIsSolving] = useState(false);
  const handleChange = (event) => {
    setCubeString(event.target.value)
  }
  
  const getSolveResponse = async () => {
    if (cubeString.length !== validCubeStringLength){
      alert('Cube string must be 54 characters long')
      return
    }
    if (regex.test(cubeString)) {
        alert("Cube string must only contain 'r', 'b', 'g', 'o', 'y', 'w'")
        return
    }
    try{
      const response = await api.get(`/rubik/solve?cube=${cubeString}`)
      setCubeSolution(parseResponse(response.data))
      initiateRotations(parseResponse(response.data))
      
    }
    catch(error){
      console.log(error)
    }
  }

  const initiateRotations = async (rotations) => {
    if (rotations && rotations.length !== 0){
      let currentCubeString = cubeString
      setIsSolving(true)
      for (const rotation of rotations) {
        currentCubeString = await rotate(rotation, currentCubeString)
      }
      setIsSolving(false)
    }
}

const rotate = async (rotation, currentCubeString) => {
  try{
    const response = await api.get(`/rubik/rotate?dir=${rotation}&cube=${currentCubeString}`)
    const newCubeString = parseResponse(response.data)
    setCubeString(newCubeString)
    return newCubeString
  }
  catch(error){
    console.log(error)
  }
}

  const getScrambleResponse = async () => {
    if (cubeString.length !== validCubeStringLength){
      alert('Cube string must be 54 characters long')
      return
    }
    if (regex.test(cubeString)) {
        alert("Cube string must only contain 'r', 'b', 'g', 'o', 'y', 'w'")
        return
    }
    try{
      const response = await api.get(`/rubik/rotate?dir=${randomRotations()}&cube=${cubeString}`)
      setCubeString(parseResponse(response.data))
    }
    catch(error){
      console.log(error)
    }
  }

  const randomRotations = () => {
    const rotations = ['F', 'f', 'B', 'b', 'R', 'r', 'L', 'l', 'U', 'u']
    let scramble = ''
    for (let i = 0; i < 4; i++){
      scramble += rotations[Math.floor(Math.random() * rotations.length)]
    }
    return scramble
  }

  const parseResponse = (response) => {
    if (response !== undefined){
      return response.split(' ')[1].replace(',', '').replace(/'/g, '')
    }
    
  }

  return (
    <div className='homeContainer'>
      <div className='errorMessage'>
        <p>{regex.test(cubeString)&& "Cube string must only contain 'r', 'b', 'g', 'o', 'y', 'w'"}</p>
      </div>
      
      <div className='fieldContainer'>
        <input 
          id='userInputField' 
          placeholder='Enter input Cube' 
          className='userInputField' 
          type="text" 
          onChange={handleChange} 
          value={cubeString} 
          readOnly={isSolving?true:false} 
          style={isSolving ? { backgroundColor: '#C8C8C8' } : {}}/>
      </div>

      <div className="userButtonsContainer">
        <button 
          onClick={getSolveResponse} 
          readOnly={isSolving?true:false} 
          style={isSolving ? { backgroundColor: '#C8C8C8' } : {}}>
            Solve
        </button>
        <button 
          onClick={getScrambleResponse} 
          readOnly={isSolving?true:false} 
          style={isSolving ? { backgroundColor: '#C8C8C8' } : {}}>
            Scramble
        </button>
      </div>

      <div className='cubeAndRotationButtonsContainer'>
        <Cube 
          inputCubeString={cubeString.length === validCubeStringLength && !(regex.test(cubeString)) ? cubeString : ""} 
          solution={cubeSolution}/>
        <RotationButtons 
          rotator={rotate} 
          cube={cubeString}/>
      </div>
      
      <RotationsText 
        solution={cubeSolution}/>
    </div>
  )
}

export default Home