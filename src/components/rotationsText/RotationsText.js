import React from 'react'
import './RotationsText.css'

const RotationsText = ({solution}) => {
  return (
    <div className='rotationsTextContainer'>
        <label>
            Rotations Performed:<span title='explanation'>?</span>
        </label>
        <textarea className='rotationsText' value={solution} readOnly />

    </div>
  )
}

export default RotationsText