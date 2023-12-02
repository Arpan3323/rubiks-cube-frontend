import React from 'react'
import './home.css';
import api from '../../api/axiosConfig'
import { useState } from 'react'
import Cube from '../cube/Cube';

const Home = () => {
  const validCubeStringLength = 54
  const regex = new RegExp('[^rbgoyw]');
  const [cubeString, setCubeString] = useState('gggggggggbbbbbbbbbrrrrrrrrroooooooooyyyyyyyyywwwwwwwww')
  const [cubeSolution, setCubeSolution] = useState('')

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
      console.log(response)
      parseResponse(response.data)
    }
    catch(error){
      console.log(error)
    }
  }

  const getScrambleResponse = async () => {

    //TODO: This is getting messy, I should probably make a function to handle this
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
      console.log(response)
      response.data = response.data.split(' ')
      response.data = response.data[1].replace(',', '').replace(/'/g, '')
      setCubeString(response.data)
      console.log(response.data)
      
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
    console.log(scramble)
    return scramble
  }

  const parseResponse = (response) => {
    if (response === undefined){
      return(
        <div></div>
      )
    }
    response = response.split(' ')
    console.log(response[1].replace(',', ''))
    return(
      setCubeSolution(response[1].replace(',', '').replace(/'/g, ''))
    )
  }
  return (
    <div className='homeContainer'>
      <p>{regex.test(cubeString)&& "Cube string must only contain 'r', 'b', 'g', 'o', 'y', 'w'"}</p>
      <div className='cubeStringFields'>
        
        <input placeholder='Enter input Cube' className='userInputField' type="text" onChange={handleChange} defaultValue={'gggggggggbbbbbbbbbrrrrrrrrroooooooooyyyyyyyyywwwwwwwww'} value={cubeString}/>
        
      </div>
      <div className="userButtons responsive">
        <button onClick={getSolveResponse} >Solve</button>
        <button onClick={getScrambleResponse} >Scramble</button>
      </div>
      <Cube inputCubeString={cubeString.length === validCubeStringLength && !(regex.test(cubeString)) ? cubeString : ""}/>

      {cubeSolution}

    
    </div>
  )
}

export default Home