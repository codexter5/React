import React from 'react'

//const Person = ({name="Unknown", age={N/A}}) => {
const Person = (props) => {
    let {name, age}=props
  return (
    <div className='p-3 border w-50 my-2'>
      <h1>Name: {name}</h1>
      <h2>Age:{age}</h2>
    </div>
  )
}

export default Person
