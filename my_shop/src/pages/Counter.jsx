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

    let [data, setData]=useState(100)

    const inc =()=>{
        setData(data+10)
    }
    const dec =()=>{
        setData(data-10)
    }
  return (
    <div>
        data:{data}
        <Button onClick={inc}>IncInData</Button>
        <Button onClick={dec}>DecInData</Button>
        {
            data != 0 &&
        <Button onClick={()=>{
            setData(100)
        }}>
            Reset
        </Button>

        }
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
