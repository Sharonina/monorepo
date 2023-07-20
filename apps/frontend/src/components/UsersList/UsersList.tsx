import React from "react";

function UsersList(props) {
  return (
    <>
      <h2>Users</h2>
      <ul>{props.children}</ul>
    </>
  );
}

export { UsersList };
