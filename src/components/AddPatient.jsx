import React, { useState } from "react";

const AddPatient = () => {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    allergies: "",
    medicalHistory: "",
  });

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Paciente agregado: ", patient);
    setPatient({
      name: "",
      age: "",
      allergies: "",
      medicalHistory: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar paciente</h2>
      <input
        type="text"
        placeholder="Nombre"
        name="name"
        value={patient.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Edad"
        name="age"
        value={patient.age}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Alergias"
        name="allergies"
        value={patient.allergies}
        onChange={handleChange}
      />
      <textarea
        placeholder="Historial médico"
        name="medicalHistory"
        value={patient.medicalHistory}
        onChange={handleChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AddPatient;
