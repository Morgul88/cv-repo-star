import React from 'react'

const Timetag = ({ name, time }) => {
  const displayName = name ? name : "Anställnings-period";
  const displayTime = time ? time : "";

  return (
    <div className='time-line'>
      <p><strong>{displayName}</strong> {displayTime}</p>
    </div>
  )
}

export default Timetag