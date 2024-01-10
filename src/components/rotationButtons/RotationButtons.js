import React from 'react'
import './RotationButtons.css'

const RotationButtons = ({rotator, cube}) => {


  return (
    <div className='rotationButtonsContainer'>
        <button onClick={() => rotator("F", cube)}>
            F
        </button>
        <button onClick={() => rotator("R", cube)}>
            R
        </button >
        <button onClick={() => rotator("B", cube)}>
            B
        </button>
        <button onClick={() => rotator("L", cube)}>
            L
        </button>
        <button onClick={() => rotator("U", cube)}>
            U
        </button>
        <button onClick={() => rotator("f", cube)}>
            f
        </button>
        <button onClick={() => rotator("r", cube)}>
            r
        </button>
        <button onClick={() => rotator("b", cube)}>
            b
        </button>
        <button onClick={() => rotator("l", cube)}>
            l
        </button>
        <button onClick={() => rotator("u", cube)}>
            u
        </button>
    </div>
  )
}

export default RotationButtons