import React from 'react'
import { Face, Square, RowContainer, ColumnContainer, CubeContainer } from './Cube.style'
//import Rotator from './Rotator'

const Cube = ({inputCubeString}, {solution}) => {

    const leftFaceColors = separateColorsForEachFace(inputCubeString).left
    const rightFaceColors = separateColorsForEachFace(inputCubeString).right
    const frontFaceColors = separateColorsForEachFace(inputCubeString).front
    const backFaceColors = separateColorsForEachFace(inputCubeString).back
    const topFaceColors = separateColorsForEachFace(inputCubeString).top
    const bottomFaceColors = separateColorsForEachFace(inputCubeString).bottom
    


  return (
    <CubeContainer>
        
        <RowContainer>
            <Face id="left">
                <Square colorOfPiece={leftFaceColors.length !== 0 ? leftFaceColors[0] : "red"}/>
                <Square colorOfPiece={leftFaceColors.length !== 0 ? leftFaceColors[1] : "red"}/>
                <Square colorOfPiece={leftFaceColors.length !== 0 ? leftFaceColors[2] : "red"}/>
                <Square colorOfPiece={leftFaceColors.length !== 0 ? leftFaceColors[3] : "red"}/>
                <Square colorOfPiece={leftFaceColors.length !== 0 ? leftFaceColors[4] : "red"}/>
                <Square colorOfPiece={leftFaceColors.length !== 0 ? leftFaceColors[5] : "red"}/>
                <Square colorOfPiece={leftFaceColors.length !== 0 ? leftFaceColors[6] : "red"}/>
                <Square colorOfPiece={leftFaceColors.length !== 0 ? leftFaceColors[7] : "red"}/>
                <Square colorOfPiece={leftFaceColors.length !== 0 ? leftFaceColors[8] : "red"}/>
            </Face>
            <ColumnContainer>
                <Face id="top">
                    <Square colorOfPiece= {topFaceColors.length !== 0 ? topFaceColors[0] : "yellow"}/>
                    <Square colorOfPiece={topFaceColors.length !== 0 ? topFaceColors[1] : "yellow"}/>
                    <Square colorOfPiece={topFaceColors.length !== 0 ? topFaceColors[2] : "yellow"}/>
                    <Square colorOfPiece={topFaceColors.length !== 0 ? topFaceColors[3] : "yellow"}/>
                    <Square colorOfPiece={topFaceColors.length !== 0 ? topFaceColors[4] : "yellow"}/>
                    <Square colorOfPiece={topFaceColors.length !== 0 ? topFaceColors[5] : "yellow"}/>
                    <Square colorOfPiece={topFaceColors.length !== 0 ? topFaceColors[6] : "yellow"}/>
                    <Square colorOfPiece={topFaceColors.length !== 0 ? topFaceColors[7] : "yellow"}/>
                    <Square colorOfPiece={topFaceColors.length !== 0 ? topFaceColors[8] : "yellow"}/>
                </Face>
                <Face id="front">
                    <Square colorOfPiece={frontFaceColors.length !== 0 ? frontFaceColors[0] : "green" }/>
                    <Square colorOfPiece={frontFaceColors.length !== 0 ? frontFaceColors[1] : "green" }/>
                    <Square colorOfPiece={frontFaceColors.length !== 0 ? frontFaceColors[2] : "green" }/>
                    <Square colorOfPiece={frontFaceColors.length !== 0 ? frontFaceColors[3] : "green" }/>
                    <Square colorOfPiece={frontFaceColors.length !== 0 ? frontFaceColors[4] : "green" }/>
                    <Square colorOfPiece={frontFaceColors.length !== 0 ? frontFaceColors[5] : "green" }/>
                    <Square colorOfPiece={frontFaceColors.length !== 0 ? frontFaceColors[6] : "green" }/>
                    <Square colorOfPiece={frontFaceColors.length !== 0 ? frontFaceColors[7] : "green" }/>
                    <Square colorOfPiece={frontFaceColors.length !== 0 ? frontFaceColors[8] : "green" }/>
                </Face>
                <Face id="bottom">
                    <Square colorOfPiece={bottomFaceColors.length !== 0 ? bottomFaceColors[0] : "white"}/>
                    <Square colorOfPiece={bottomFaceColors.length !== 0 ? bottomFaceColors[1] : "white"}/>
                    <Square colorOfPiece={bottomFaceColors.length !== 0 ? bottomFaceColors[2] : "white"}/>
                    <Square colorOfPiece={bottomFaceColors.length !== 0 ? bottomFaceColors[3] : "white"}/>
                    <Square colorOfPiece={bottomFaceColors.length !== 0 ? bottomFaceColors[4] : "white"}/>
                    <Square colorOfPiece={bottomFaceColors.length !== 0 ? bottomFaceColors[5] : "white"}/>
                    <Square colorOfPiece={bottomFaceColors.length !== 0 ? bottomFaceColors[6] : "white"}/>
                    <Square colorOfPiece={bottomFaceColors.length !== 0 ? bottomFaceColors[7] : "white"}/>
                    <Square colorOfPiece={bottomFaceColors.length !== 0 ? bottomFaceColors[8] : "white"}/>
                </Face>
            </ColumnContainer>
            <Face id="right">
                <Square colorOfPiece={rightFaceColors.length !== 0 ? rightFaceColors[0] : "orange"}/>
                <Square colorOfPiece={rightFaceColors.length !== 0 ? rightFaceColors[1] : "orange"}/>
                <Square colorOfPiece={rightFaceColors.length !== 0 ? rightFaceColors[2] : "orange"}/>
                <Square colorOfPiece={rightFaceColors.length !== 0 ? rightFaceColors[3] : "orange"}/>
                <Square colorOfPiece={rightFaceColors.length !== 0 ? rightFaceColors[4] : "orange"}/>
                <Square colorOfPiece={rightFaceColors.length !== 0 ? rightFaceColors[5] : "orange"}/>
                <Square colorOfPiece={rightFaceColors.length !== 0 ? rightFaceColors[6] : "orange"}/>
                <Square colorOfPiece={rightFaceColors.length !== 0 ? rightFaceColors[7] : "orange"}/>
                <Square colorOfPiece={rightFaceColors.length !== 0 ? rightFaceColors[8] : "orange"}/>
            </Face>
            <Face id="back">
                <Square colorOfPiece={backFaceColors.length !== 0 ? backFaceColors[0] : "blue"}/>
                <Square colorOfPiece={backFaceColors.length !== 0 ? backFaceColors[1] : "blue"}/>
                <Square colorOfPiece={backFaceColors.length !== 0 ? backFaceColors[2] : "blue"}/>
                <Square colorOfPiece={backFaceColors.length !== 0 ? backFaceColors[3] : "blue"}/>
                <Square colorOfPiece={backFaceColors.length !== 0 ? backFaceColors[4] : "blue"}/>
                <Square colorOfPiece={backFaceColors.length !== 0 ? backFaceColors[5] : "blue"}/>
                <Square colorOfPiece={backFaceColors.length !== 0 ? backFaceColors[6] : "blue"}/>
                <Square colorOfPiece={backFaceColors.length !== 0 ? backFaceColors[7] : "blue"}/>
                <Square colorOfPiece={backFaceColors.length !== 0 ? backFaceColors[8] : "blue"}/>
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