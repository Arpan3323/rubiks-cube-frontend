import React from 'react'
import { Face, Square, RowContainer, ColumnContainer, CubeContainer } from './Cube.style'

const Cube = ({inputCubeString}) => {

    const cubeFaces = separateColorsForEachFace(inputCubeString)
    


  return (
    <CubeContainer>
        
        <RowContainer>
            <Face id="left">
                <Square $colorofpiece={cubeFaces.left.length !== 0 ? cubeFaces.left[0] : "red"}/>
                <Square $colorofpiece={cubeFaces.left.length !== 0 ? cubeFaces.left[1] : "red"}/>
                <Square $colorofpiece={cubeFaces.left.length !== 0 ? cubeFaces.left[2] : "red"}/>
                <Square $colorofpiece={cubeFaces.left.length !== 0 ? cubeFaces.left[3] : "red"}/>
                <Square $colorofpiece={cubeFaces.left.length !== 0 ? cubeFaces.left[4] : "red"}/>
                <Square $colorofpiece={cubeFaces.left.length !== 0 ? cubeFaces.left[5] : "red"}/>
                <Square $colorofpiece={cubeFaces.left.length !== 0 ? cubeFaces.left[6] : "red"}/>
                <Square $colorofpiece={cubeFaces.left.length !== 0 ? cubeFaces.left[7] : "red"}/>
                <Square $colorofpiece={cubeFaces.left.length !== 0 ? cubeFaces.left[8] : "red"}/>
            </Face>
            <ColumnContainer>
                <Face id="top">
                    <Square $colorofpiece= {cubeFaces.top.length !== 0 ? cubeFaces.top[0] : "yellow"}/>
                    <Square $colorofpiece={cubeFaces.top.length !== 0 ? cubeFaces.top[1] : "yellow"}/>
                    <Square $colorofpiece={cubeFaces.top.length !== 0 ? cubeFaces.top[2] : "yellow"}/>
                    <Square $colorofpiece={cubeFaces.top.length !== 0 ? cubeFaces.top[3] : "yellow"}/>
                    <Square $colorofpiece={cubeFaces.top.length !== 0 ? cubeFaces.top[4] : "yellow"}/>
                    <Square $colorofpiece={cubeFaces.top.length !== 0 ? cubeFaces.top[5] : "yellow"}/>
                    <Square $colorofpiece={cubeFaces.top.length !== 0 ? cubeFaces.top[6] : "yellow"}/>
                    <Square $colorofpiece={cubeFaces.top.length !== 0 ? cubeFaces.top[7] : "yellow"}/>
                    <Square $colorofpiece={cubeFaces.top.length !== 0 ? cubeFaces.top[8] : "yellow"}/>
                </Face>
                <Face id="front">
                    <Square $colorofpiece={cubeFaces.front.length !== 0 ? cubeFaces.front[0] : "green" }/>
                    <Square $colorofpiece={cubeFaces.front.length !== 0 ? cubeFaces.front[1] : "green" }/>
                    <Square $colorofpiece={cubeFaces.front.length !== 0 ? cubeFaces.front[2] : "green" }/>
                    <Square $colorofpiece={cubeFaces.front.length !== 0 ? cubeFaces.front[3] : "green" }/>
                    <Square $colorofpiece={cubeFaces.front.length !== 0 ? cubeFaces.front[4] : "green" }/>
                    <Square $colorofpiece={cubeFaces.front.length !== 0 ? cubeFaces.front[5] : "green" }/>
                    <Square $colorofpiece={cubeFaces.front.length !== 0 ? cubeFaces.front[6] : "green" }/>
                    <Square $colorofpiece={cubeFaces.front.length !== 0 ? cubeFaces.front[7] : "green" }/>
                    <Square $colorofpiece={cubeFaces.front.length !== 0 ? cubeFaces.front[8] : "green" }/>
                </Face>
                <Face id="bottom">
                    <Square $colorofpiece={cubeFaces.bottom.length !== 0 ? cubeFaces.bottom[0] : "white"}/>
                    <Square $colorofpiece={cubeFaces.bottom.length !== 0 ? cubeFaces.bottom[1] : "white"}/>
                    <Square $colorofpiece={cubeFaces.bottom.length !== 0 ? cubeFaces.bottom[2] : "white"}/>
                    <Square $colorofpiece={cubeFaces.bottom.length !== 0 ? cubeFaces.bottom[3] : "white"}/>
                    <Square $colorofpiece={cubeFaces.bottom.length !== 0 ? cubeFaces.bottom[4] : "white"}/>
                    <Square $colorofpiece={cubeFaces.bottom.length !== 0 ? cubeFaces.bottom[5] : "white"}/>
                    <Square $colorofpiece={cubeFaces.bottom.length !== 0 ? cubeFaces.bottom[6] : "white"}/>
                    <Square $colorofpiece={cubeFaces.bottom.length !== 0 ? cubeFaces.bottom[7] : "white"}/>
                    <Square $colorofpiece={cubeFaces.bottom.length !== 0 ? cubeFaces.bottom[8] : "white"}/>
                </Face>
            </ColumnContainer>
            <Face id="right">
                <Square $colorofpiece={cubeFaces.right.length !== 0 ? cubeFaces.right[0] : "orange"}/>
                <Square $colorofpiece={cubeFaces.right.length !== 0 ? cubeFaces.right[1] : "orange"}/>
                <Square $colorofpiece={cubeFaces.right.length !== 0 ? cubeFaces.right[2] : "orange"}/>
                <Square $colorofpiece={cubeFaces.right.length !== 0 ? cubeFaces.right[3] : "orange"}/>
                <Square $colorofpiece={cubeFaces.right.length !== 0 ? cubeFaces.right[4] : "orange"}/>
                <Square $colorofpiece={cubeFaces.right.length !== 0 ? cubeFaces.right[5] : "orange"}/>
                <Square $colorofpiece={cubeFaces.right.length !== 0 ? cubeFaces.right[6] : "orange"}/>
                <Square $colorofpiece={cubeFaces.right.length !== 0 ? cubeFaces.right[7] : "orange"}/>
                <Square $colorofpiece={cubeFaces.right.length !== 0 ? cubeFaces.right[8] : "orange"}/>
            </Face>
            <Face id="back">
                <Square $colorofpiece={cubeFaces.back.length !== 0 ? cubeFaces.back[0] : "blue"}/>
                <Square $colorofpiece={cubeFaces.back.length !== 0 ? cubeFaces.back[1] : "blue"}/>
                <Square $colorofpiece={cubeFaces.back.length !== 0 ? cubeFaces.back[2] : "blue"}/>
                <Square $colorofpiece={cubeFaces.back.length !== 0 ? cubeFaces.back[3] : "blue"}/>
                <Square $colorofpiece={cubeFaces.back.length !== 0 ? cubeFaces.back[4] : "blue"}/>
                <Square $colorofpiece={cubeFaces.back.length !== 0 ? cubeFaces.back[5] : "blue"}/>
                <Square $colorofpiece={cubeFaces.back.length !== 0 ? cubeFaces.back[6] : "blue"}/>
                <Square $colorofpiece={cubeFaces.back.length !== 0 ? cubeFaces.back[7] : "blue"}/>
                <Square $colorofpiece={cubeFaces.back.length !== 0 ? cubeFaces.back[8] : "blue"}/>
            </Face>            
        </RowContainer>
        
    </CubeContainer>
    
  )
}

const separateColorsForEachFace = (inputCubeString) => {
    if (inputCubeString === false){
        return
    }
    const cubeColors = {
        front: [],
        back: [],
        left: [],
        right: [],
        top: [],
        bottom: []
    }
    for (let i = 0; i < inputCubeString.length; i++){
        if (i < 9){
            cubeColors.front.push(inputCubeString[i])
        }
        else if (i < 18){
            cubeColors.right.push(inputCubeString[i])
        }
        else if (i < 27){
            cubeColors.back.push(inputCubeString[i])
        }
        else if (i < 36){
            cubeColors.left.push(inputCubeString[i])
        }
        else if (i < 45){
            cubeColors.top.push(inputCubeString[i])
        }
        else if (i < 54){
            cubeColors.bottom.push(inputCubeString[i])
        }
    }
    
    convertInputToColors(cubeColors.front)
    convertInputToColors(cubeColors.back)
    convertInputToColors(cubeColors.left)
    convertInputToColors(cubeColors.right)
    convertInputToColors(cubeColors.top)
    convertInputToColors(cubeColors.bottom)
    return cubeColors
}

const convertInputToColors = (cubeColors) => {

    for (let i = 0; i < cubeColors.length; i++){
        if (cubeColors[i] === 'g'){
            cubeColors[i] = 'green'
        }
        else if (cubeColors[i] === 'b'){
            cubeColors[i] = 'blue'
        }
        else if (cubeColors[i] === 'r'){
            cubeColors[i] = 'red'
        }
        else if (cubeColors[i] === 'o'){
            cubeColors[i] = 'orange'
        }
        else if (cubeColors[i] === 'y'){
            cubeColors[i] = 'yellow'
        }
        else if (cubeColors[i] === 'w'){
            cubeColors[i] = 'white'
        }
        
        
    }

}

export default Cube