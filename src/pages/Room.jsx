import React from 'react'
import Person from './Person'

const Room = (props) => {
  return (
    <div>
      <Person name="Ram" age={18}/>
      <Person name="Shyam" age={1}/>
      <Person name="Rameshwor" age={18}/>
      <Person name="Ramita" age={20}/>
      <Person name="Ramkumari" age={12}/>
    </div>
  )
}

export default Room
