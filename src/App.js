import React from "react";
import Appointments from './components/Appointments'
import PatientRecord from './components/PatientRecord'
import OnlineConsultation from './components/OnlineConsultation'
import AddPatient from "./components/AddPatient";
import SearchPatients from './components/SearchPatients'
import ScheduleAppointment from "./components/ScheduleAppointment";
import { useState } from "react";

const App = () => {
  const patient = {
    name: "Juan Pérez",
    age: 32,
    allergies: "Ninguna",
    medicalHistory: "Historial médico completo",

    

  };
  const [patients, setPatients] = useState([]);

  const addPatient = (patient) => {
    setPatients([...patients, patient]);
  };

  return (
    <div>
      <AddPatient addPatient={addPatient} />
      <SearchPatients patients={patients} />
      <ScheduleAppointment patients={patients} />
      <Appointments />
      <PatientRecord patient={patient} />
      <OnlineConsultation />
    </div>
  );
};

export default App;

