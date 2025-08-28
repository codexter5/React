import { Button } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    let [count, setCount]=useState(0)
  return (
    <div>
        count: 0;
        <Button>Increase</Button>
        <Button>Decrease</Button>
      
    </div>
  )
}

export default Counter
