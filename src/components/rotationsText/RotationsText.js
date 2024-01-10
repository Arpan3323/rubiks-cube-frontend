import React from 'react'
import './RotationsText.css'

const RotationsText = ({solution}) => {
  return (
    <div className='rotationsTextContainer'>
        <label>
            Rotations Performed
        </label>
        <textarea id='rotationsText' className='rotationsText' value={solution} readOnly />

    </div>
  )
}

export default RotationsText