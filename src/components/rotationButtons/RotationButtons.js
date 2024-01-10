import React from 'react'
import './RotationButtons.css'

const RotationButtons = ({rotator, cube}) => {


  return (
    <div className='rotationButtonsContainer'>
        <span title='Rotate front face clockwise'><button onClick={() => rotator("F", cube)}>
            F
        </button></span>
        <span title='Rotate right face clockwise'><button onClick={() => rotator("R", cube)}>
            R
        </button ></span>
        <span title='Rotate back face clockwise'><button onClick={() => rotator("B", cube)}>
            B
        </button></span>
        <span title='Rotate left face clockwise'><button onClick={() => rotator("L", cube)}>
            L
        </button></span>
        <span title='Rotate up face clockwise'><button onClick={() => rotator("U", cube)}>
            U
        </button></span>
        <span title='Rotate front face counter-clockwise'><button onClick={() => rotator("f", cube)}>
            f
        </button></span>
        <span title='Rotate right face counter-clockwise'><button onClick={() => rotator("r", cube)}>
            r
        </button></span>
        <span title='Rotate back face counter-clockwise'><button onClick={() => rotator("b", cube)}>
            b
        </button></span>
        <span title='Rotate left face counter-clockwise'><button onClick={() => rotator("l", cube)}>
            l
        </button></span>
        <span title='Rotate up face counter-clockwise'><button onClick={() => rotator("u", cube)}>
            u
        </button></span>
    </div>
  )
}

export default RotationButtons