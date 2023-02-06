import React from 'react'
import { useState } from 'react'
import Calendar from 'react-calendar'

const Appointments = () => {
    const [date, setDate]= useState(new Date())

    const onChange = (selecDate) =>{
        setDate (selecDate)

    }
  return (
    <div>
        <Calendar onChange={onChange} value={date}/>
        <p>Ficha seleccionada: {date.toString()}</p>
    </div>
  )
}

export default Appointments