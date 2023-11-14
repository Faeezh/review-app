import React, { useState } from 'react'

function Test() {
    const [color, setColor] = useState("green")
    
  return (
    <div>
      <div style= {{backgroundColor: color, height: '100px'}}></div>
      <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
      <button style={{backgroundColor: color, height: '30px', width: '60px'}} onClick={() => setColor('red')}>change</button>
    </div>
  )
}


export default Test
