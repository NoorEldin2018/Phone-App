import React, { useState } from 'react'
import { Input } from '../../layout'

const UserForm = ({insertUser}) => {

    const [user, setUser] = useState({
        name: '',
        city: '',
        phone: ''
    })

    const handlerChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }



    const submitHandler = (e) => {
        e.preventDefault();

        user.id = Date.now()

        insertUser(user)

        setUser({
            name: '',
        city: '',
        phone: ''
        })
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div className="container">
                {/* <div className="label">Name:</div>
                <input type="text" name="name" value={user.name} onChange={handlerChange}/> */}
                <Input label="name" value={user.name} name="name" onChange={handlerChange}/>
            </div>
            <div className="container">
                {/* <div className="label">City:</div>
                <input type="text" name="city" value={user.city} onChange={handlerChange} /> */}
                <Input label="city" name="city" value={user.city} onChange={handlerChange}/>
            </div>
            <div className="container">
                {/* <div className="label">Phone:</div>
                <input type="text" name="phone"  value={user.phone} onChange={handlerChange}/> */}
                <Input label="phone" name="phone" value={user.phone} onChange={handlerChange}/>
            </div>
            <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}

export default UserForm