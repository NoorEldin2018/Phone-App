import React from 'react'
import styles from './UsersList.module.css';

// const UsersList = ({name,...rest}) => {
const UsersList = ({name,city,editHandlerUser,...props}) => {

    const {userCard,delBtn,edit} = styles;

    const deleteHandler = (id) => {
        props.deleteHandler(id);
    }

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
        <div className={delBtn} onClick={() => deleteHandler(props.id)}>x</div>
        <div className={edit} onClick={() => editHandlerUser(props.id)}>Edit</div>
    </div>
  )
}

export default UsersList