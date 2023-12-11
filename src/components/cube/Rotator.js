import React from 'react'
import api from '../../api/axiosConfig'

const Rotator = ({solution}, {cubeString}) => {
  return (
    <div>
        {rotateCubeForSolution(solution, cubeString)}
    </div>
  )
}


function rotateCubeForSolution(solution, cubeString){

    if (solution && solution.length !== 0){
        
        for (let i = 0; i < solution.length; i++){
            setTimeout(() => {
                rotate(solution[i], cubeString)
            }, 1000)
            console.log("I am here")

        
        }
    }

}


function rotate(solution, cubeString){
    try{
        const response = api.get(`/rubik/rotate?dir=${solution}&cube=${cubeString}`)
        cubeString = response.data.split(' ')[1].replace(',', '').replace(/'/g, '')

    }
    catch(error){
        console.log(error)
    }
}
export default Rotator