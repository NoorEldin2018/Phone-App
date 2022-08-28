import React from 'react'
import styles from './Container.module.css';

const Container = ({children,smallSize, customStyle}) => {

  const {fixed ,large,small} = styles;

  return (
    // <div className={`${fixed} ${!smallSize ? large : small}`} style={customStyle}>{children}</div>
    <div className={`${fixed} ${!smallSize ? large : small}`} style={{...customStyle}}>{children}</div>
  )
}

export default Container;