import React, { useState } from "react";
import "./App.css";

import { CreateUser } from "./components/CreateUser/CreateUser";
import { UsersList } from "./components/UsersList/UsersList";
import { UserItem } from "./components/UserItem/UserItem";

function App() {
  const defaultUsers = [
    {
      name: "Anita",
      number: 11111,
      contactType: "Empresa",
    },
    {
      name: "Jose",
      number: 22222,
      contactType: "Persona",
    },
    {
      name: "Fernanda",
      number: 33333,
      contactType: "Empresa",
    },
  ];

  const [users, setUsers] = useState(defaultUsers);
  const [filteredUsers, setFilteredUsers] = useState(null); // Estado para almacenar los usuarios filtrados
  const [sortOrder, setSortOrder] = useState("asc"); // Estado para controlar el orden

  const deleteUser = (number) => {
    const newUsers = users.filter((user) => user.number !== number);
    setUsers(newUsers);
  };

  const createNewUser = (name, number, contactType) => {
    const newUser = {
      name,
      number,
      contactType,
    };
    setUsers([...users, newUser]);
    handleFilter(filteredUsers ? filteredUsers[0].contactType : "Todos"); // Vuelve a aplicar el filtro después de agregar el nuevo usuario
  };

  const handleFilter = (type) => {
    if (type === "Todos") {
      setFilteredUsers(null);
    } else {
      const filteredResults = users.filter((user) => user.contactType === type);
      setFilteredUsers(filteredResults);
    }
  };

  const handleSort = () => {
    const sortedUsers = [...(filteredUsers || users)];
    sortedUsers.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (sortOrder === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });

    setFilteredUsers(sortedUsers);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <>
      <CreateUser createNewUser={createNewUser} />
      <div>
        <button
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          onClick={() => handleFilter("Todos")}
        >
          Todos
        </button>
        <button
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          onClick={() => handleFilter("Empresa")}
        >
          Empresas
        </button>
        <button
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          onClick={() => handleFilter("Persona")}
        >
          Personas
        </button>
        <button onClick={handleSort}>
          Ordenar {sortOrder === "asc" ? "A-Z" : "Z-A"}
        </button>
      </div>
      <UsersList>
        {(filteredUsers || users).map((user) => (
          <UserItem
            key={user.number}
            name={user.name}
            number={user.number}
            onDelete={() => deleteUser(user.number)}
          />
        ))}
      </UsersList>
    </>
  );
}

export default App;
