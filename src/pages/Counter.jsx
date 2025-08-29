import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import MyButton from '../components/layouts/MyButton'

const Counter = () => {
  let [count,setc]=React.useState(0)
  let [data,setdata]=React.useState(100)

useEffect(()=>{
  alert("val up");
}, [count,data])
  const inc=()=>{
    setdata(data+10)
  }
  const dec=()=>{
    setdata(data-10)
  }
  const increase=()=>{
    setc(++count)
  }

  const decrease = () =>{
    setc(--count)
  }

  return (
    <div>
      <div>
        
      Data: {data}
      <Button onClick={()=>setdata(data+10)}>Increase</Button>
      <Button onClick={()=>setdata(data-10)}>Decrease</Button>
      </div>
      Count: {count}
      <MyButton color='yellow' text='UP' test={increase}/>
      {
        count<10 &&
        <Button onClick={increase}>Increase</Button>
      }
      <MyButton color='blue' text='sup' test = {decrease}/>
      {
        count>0 &&
      <Button onClick={decrease}>Decrease</Button>
      }
      {
      count !=0 &&
      <Button onClick={()=>{
      setc(0);
      }}>Reset</Button>
    }

    </div>
  )
}

export default Counter