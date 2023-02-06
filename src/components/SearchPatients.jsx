import React, { useState } from "react";

const SearchPatients = ({ patients }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const results = patients.filter((patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Buscar fichas clínicas</h2>
      <input
        type="text"
        placeholder="Nombre del paciente"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Buscar</button>
      {searchResults.map((result) => (
<div key={result.name}>
<h3>{result.name}</h3>
<p>Edad: {result.age}</p>
<p>Alergias: {result.allergies}</p>
<p>Historial médico: {result.medicalHistory}</p>
</div>
))}
</form>
);
};

export default SearchPatients