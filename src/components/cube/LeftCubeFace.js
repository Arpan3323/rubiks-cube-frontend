import React from 'react';

const LeftCubeFace = () => {
  // Define the number of rows and columns

  const colors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-gray-100',
    'bg-orange-500',
  ];

  return (
    <div className='m-12 bg-slate-600 ' style={{transform: 'rotateY(25deg) rotateX(10deg)'}}>
      <div className='flex justify-start'>
        <div className={`${colors[2]} rounded-md hover:bg-purple-400 transform hover:scale-y-105 transition-transform duration-300 w-12 h-12 m-0.5`}>
        
        </div>
        <div className={`${colors[2]} bg-purple-500 rounded-md hover:bg-purple-400 transform hover:scale-y-105 transition-transform duration-300 w-12 h-12 m-0.5`}>
        
        </div>
        <div className={`${colors[2]} bg-purple-500 rounded-md hover:bg-purple-400 transform hover:scale-y-105 transition-transform duration-300 w-12 h-12 m-0.5`}>
        
        </div>
        
      </div>
      <div className='flex justify-start'>
        <div className={`${colors[2]} bg-purple-500 rounded-md hover:bg-purple-400 transform hover:scale-y-105 transition-transform duration-300 w-12 h-12 m-0.5`}>
        
        </div>
        <div className={`${colors[2]} bg-purple-500 rounded-md hover:bg-purple-400 transform hover:scale-y-105 transition-transform duration-300 w-12 h-12 m-0.5`}>
        
        </div>
        <div className={`${colors[2]} bg-purple-500 rounded-md hover:bg-purple-400 transform hover:scale-y-105 transition-transform duration-300 w-12 h-12 m-0.5`}>
        
        </div>
        
      </div>
      <div className='flex justify-start'>
        <div className={`${colors[2]} bg-purple-500 rounded-md hover:bg-purple-400 transform hover:scale-y-105 transition-transform duration-300 w-12 h-12 m-0.5`}>
        
        </div>
        <div className={`${colors[4]} bg-purple-500 rounded-md hover:bg-purple-400 transform hover:scale-y-105 transition-transform duration-300 w-12 h-12 m-0.5`}>
        
        </div>
        <div className={`${colors[5]} bg-purple-500 rounded-md hover:bg-purple-400 transform hover:scale-y-105 transition-transform duration-300 w-12 h-12 m-0.5`}>
        
        </div>
        
      </div>
  </div>)};

export default LeftCubeFace;
