import React from 'react'

const Timetag = (props) => {
  return (
    <div className='time-line'>
    <p><strong>Anställnings-period:</strong> {props.value} </p>
   </div>
  )
}

export default Timetag