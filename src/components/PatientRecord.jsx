import React from 'react'

const PatientRecord= ({patient})=> {
  return (
    <div>
        <h2>hitorial Clinico</h2>
        <p>Nombre : {patient.name}</p>
        <p>Apellido: {patient.lastName}</p>
        <p>Edad: {patient.age}</p>
        <p>Alergias: {patient.allergies}</p>
        <p>Historial Medico: {patient.medicalHistory}</p>
    </div>
  )
}

export default PatientRecord