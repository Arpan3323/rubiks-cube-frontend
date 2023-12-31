import React from 'react'
import api from '../../api/axiosConfig'

const Rotator = ({solution, cubeString}) => {
  return (
    <div>
        {console.log({solution})}
        {console.log({cubeString})}

        {rotateCubeForSolution(solution, cubeString)}
    </div>
  )
}


function rotateCubeForSolution(solution, cubeString){

    if (solution && solution.length !== 0){
        
        for (let i = 0; i < 2; i++){
            setTimeout(() => {
                rotate(solution[i], cubeString)
            })
            console.log("I am here")

        
        }
    }

}


async function rotate(solution, cubeString){

    try{
        console.log(solution)
        console.log(cubeString)
        const response = await api.get(`/rubik/rotate?dir=${solution}&cube=${cubeString}`)
        console.log(response)
        cubeString = response.data.split(' ')[1].replace(',', '').replace(/'/g, '')
        console.log(cubeString)

    }
    catch(error){
        console.log(error)
    }
}
export default Rotator