import React, { useState } from 'react'

const OnlineConsultation =()=> {
    const[message, setMessage] = useState('')

    const handleSubmit =(event) =>{
        event.preventDefault()
        setMessage('')
    }
  return (
    <form onSubmit={handleSubmit}>
        <h2>Consulta en linea</h2>
        <textarea value={message} onChange={(event) =>setMessage(event.target.value)}/>
        <button type='submit' >Enviar</button>

    </form>
  )
}

export default OnlineConsultation