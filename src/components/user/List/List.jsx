import React from "react";
import UsersList from "../UsersList/UsersList";

const List = ({ users, deleteHandler, editHandlerUser }) => {
  const usersList = users.map((el, id) => (
    <UsersList
      deleteHandler={deleteHandler}
      editHandlerUser={editHandlerUser}
      key={id}
      {...el}
    />
  ));
  return <>{usersList}</>;
};

export default List;
