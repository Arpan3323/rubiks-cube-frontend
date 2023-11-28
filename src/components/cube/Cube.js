import React from 'react'
import { Face, Square, RowContainer, ColumnContainer } from './Cube.style'

const Cube = () => {
  return (
    <div>Cube
        
        <RowContainer>
            <Face cubeFace="left">
                <Square colorOfPiece="red"/>
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
                <Face cubeFace="top">
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
                <Face cubeFace="front">
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
                <Face cubeFace="bottm">
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
            <Face cubeFace="right">
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
            <Face cubeFace="back">
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
        
    </div>
  )
}

export default Cube