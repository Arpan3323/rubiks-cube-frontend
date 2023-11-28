import React from 'react'
import api from '../../api/axiosConfig'
import { Face, Square, RowContainer, ColumnContainer, CubeContainer } from './Cube.style'

const Cube = ({inputCubeString}) => {

    console.log(separateColorsForEachFace(inputCubeString))


  return (
    <CubeContainer>
        
        <RowContainer>
            <Face id="left">
                <Square colorOfPiece={"red"}/>
                <Square colorOfPiece="red"/>
                <Square colorOfPiece="red"/>
                <Square colorOfPiece="red"/>
                <Square colorOfPiece="red"/>
                <Square colorOfPiece="red"/>
                <Square colorOfPiece="red"/>
                <Square colorOfPiece="red"/>
                <Square colorOfPiece="red"/>
            </Face>
            <ColumnContainer>
                <Face id="top">
                    <Square colorOfPiece="yellow"/>
                    <Square colorOfPiece="yellow"/>
                    <Square colorOfPiece="yellow"/>
                    <Square colorOfPiece="yellow"/>
                    <Square colorOfPiece="yellow"/>
                    <Square colorOfPiece="yellow"/>
                    <Square colorOfPiece="yellow"/>
                    <Square colorOfPiece="yellow"/>
                    <Square colorOfPiece="yellow"/>
                </Face>
                <Face id="front">
                    <Square colorOfPiece="green"/>
                    <Square colorOfPiece="green"/>
                    <Square colorOfPiece="green"/>
                    <Square colorOfPiece="green"/>
                    <Square colorOfPiece="green"/>
                    <Square colorOfPiece="green"/>
                    <Square colorOfPiece="green"/>
                    <Square colorOfPiece="green"/>
                    <Square colorOfPiece="green"/>
                </Face>
                <Face id="bottom">
                    <Square colorOfPiece="white"/>
                    <Square colorOfPiece="white"/>
                    <Square colorOfPiece="white"/>
                    <Square colorOfPiece="white"/>
                    <Square colorOfPiece="white"/>
                    <Square colorOfPiece="white"/>
                    <Square colorOfPiece="white"/>
                    <Square colorOfPiece="white"/>
                    <Square colorOfPiece="white"/>
                </Face>
            </ColumnContainer>
            <Face id="right">
                <Square colorOfPiece="orange"/>
                <Square colorOfPiece="orange"/>
                <Square colorOfPiece="orange"/>
                <Square colorOfPiece="orange"/>
                <Square colorOfPiece="orange"/>
                <Square colorOfPiece="orange"/>
                <Square colorOfPiece="orange"/>
                <Square colorOfPiece="orange"/>
                <Square colorOfPiece="orange"/>
            </Face>
            <Face id="back">
                <Square colorOfPiece="blue"/>
                <Square colorOfPiece="blue"/>
                <Square colorOfPiece="blue"/>
                <Square colorOfPiece="blue"/>
                <Square colorOfPiece="blue"/>
                <Square colorOfPiece="blue"/>
                <Square colorOfPiece="blue"/>
                <Square colorOfPiece="blue"/>
                <Square colorOfPiece="blue"/>
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
    //console.log(cubeColors)
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