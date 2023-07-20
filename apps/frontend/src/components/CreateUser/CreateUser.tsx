import React, { useState } from "react";

function CreateUser({ createNewUser }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [contactType, setContactType] = useState("Empresa");

  const handleSubmit = (event) => {
    event.preventDefault();
    createNewUser(name, number, contactType);
    // Limpiar los campos después de crear el usuario
    setName("");
    setNumber("");
    setContactType("Empresa");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          className="border-2 border-blue-500"
          placeholder="Sharon"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Number:</label>
        <input
          className="border-2 border-blue-500"
          placeholder="44444"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <label>Contact Type:</label>
        <select
          value={contactType}
          onChange={(e) => setContactType(e.target.value)}
        >
          <option value="Empresa">Empresa</option>
          <option value="Persona">Persona</option>
        </select>
        <button type="submit" className="bg-sky-500/50">
          Create
        </button>
      </form>
    </>
  );
}

export { CreateUser };
