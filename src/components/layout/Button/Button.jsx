import React from 'react'
import styles from './button.module.css'

const Button = (props) => {
  return (
    <div {...props} className={styles.button}>
        {props.children}
    </div>
  )
}

export default Button