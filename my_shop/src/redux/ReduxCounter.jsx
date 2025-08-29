import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

const ReduxCounter = () => {
    let [countValue, setCount]=useState(0)
    const counterStore = useSelector((store)=>store)
    const count = counterStore.count
    const dispatch = useDispatch()
  return (
    <div className='text-4xl flex justify-center items-center h-[70vh] flex-col'>
      {/* ReduxCounter */}
      Count: {count}
      <div>
        <button className='light-btn' onClick={()=>{
            dispatch({type: "INCREASE"})
            //action: {type: "Increase"}
        }}>Increase Count</button>
        <button className='dark-btn' onClick={()=>{
            dispatch({type: "DECREASE"})
            //action: {type: "Increase"}
        }}>Decrease Count</button>        
        <button className='light-btn' onClick={()=>{
            dispatch({type: "RESET"})
            //action: {type: "Increase"}
        }}>Reset Count</button>
      </div>
      <div className='p-5'>
        <input type="text" className='outline' px-4 py-2
        onChange={e=>setCount(e.target.value)} />
        <button onClick={()=>{
            dispatch({type: "SET COUNT", payload: countValue})
        }}>
            Set Count
        </button>
      </div>
    </div>
  )
}

export default ReduxCounter
