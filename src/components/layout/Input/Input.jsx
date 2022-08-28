import React from 'react'


const Input = ({label,type,...rest}) => {
  return (
    <>
        <label htmlFor={label}>{label}:</label>
        <input type={!type ? 'text' : type} {...rest}/>
    </>
  )
}

export default Input