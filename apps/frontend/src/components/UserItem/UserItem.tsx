import React from "react";

function UserItem({ name, number, onDelete }) {
  return (
    <li className="flex">
      <h2 className="mx-2">{name}</h2>
      <h2>{number}</h2>
      <button onClick={onDelete} className="bg-rose-500/50">
        Delete
      </button>
    </li>
  );
}

export { UserItem };
