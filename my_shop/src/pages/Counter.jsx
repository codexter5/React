import { Button } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    let [count, setCount]=useState(0)

    const increase = () =>{
        setCount(++count)
    }
    const decrease =()=>{
        setCount(--count)
    }
  return (
    <div>
        count: {count}
        {
            count < 10 &&
        <Button onClick={increase}>Increase</Button>
        }
        <Button onClick={decrease}>Decrease</Button>
        {
            count != 0 &&
        <Button onClick={()=>{
            setCount(0)
        }}>
            Reset
        </Button>

        }
      
    </div>
  )
}

export default Counter
