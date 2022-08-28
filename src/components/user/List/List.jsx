import React from 'react'
import UsersList from '../UsersList/UsersList'

const List = ({users,deleteHandler}) => {
    const usersList = users.map((el,id) => <UsersList deleteHandler={deleteHandler} key={id} {...el} />)
  return (
    <>{usersList}</>
  )
}

export default List