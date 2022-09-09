import React from "react";
import styles from "./UsersList.module.css";

const UsersList = ({
  name,
  city,
  deleteHandler,
  editHandlerUser,
  ...props
}) => {
  const { userCard, delBtn, edit } = styles;

  return (
    <div className={userCard}>
      <ul>
        <li>
          <span>Name:</span> {name}
        </li>
        <li>
          <span>city:</span> {city}
        </li>
        <li>
          <span>phone:</span> {props.phone}
        </li>
      </ul>
      <div className={delBtn} onClick={() => deleteHandler(props.id)}>
        x
      </div>
      <div className={edit} onClick={() => editHandlerUser(props.id)}>
        Edit
      </div>
    </div>
  );
};

export default UsersList;
