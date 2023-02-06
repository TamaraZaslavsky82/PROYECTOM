import React, { useState } from "react";

const ScheduleAppointment = ({ patients }) => {
  const [appointment, setAppointment] = useState({
    patient: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cita agendada: ", appointment);
    setAppointment({
      patient: "",
      date: "",
      time: "",
      notes: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agendar cita</h2>
      <select
        name="patient"
        value={appointment.patient}
        onChange={handleChange}
      >
        <option value="">Seleccionar paciente</option>
        {patients.map((patient) => (
          <option key={patient.name} value={patient.name}>
            {patient.name}
          </option>
        ))}
      </select>
      <input
        type="date"
        name="date"
        value={appointment.date}
        onChange={handleChange}
      />
      <input
        type="time"
        name="time"
        value={appointment.time}
        onChange={handleChange}
      />
      <textarea
        placeholder="Notas"
        name="notes"
        value={appointment.notes}
        onChange={handleChange}
      />
      <button type="submit">Agendar</button>
    </form>
  );
};

export default ScheduleAppointment;