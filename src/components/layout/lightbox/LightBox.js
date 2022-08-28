import React from 'react'
import {Container} from '../index';
import styles from './LightBox.module.css';

const LightBox = ({children,toggleHandler}) => {


    const hidePopup = () => {
        toggleHandler()
    }

  return (
    <div className={styles.lightbox}>
    <Container smallSize customStyle={{backgroundColor: '#888'}}>
        <p onClick={hidePopup}>x</p>
        {children}
    </Container>
    </div>
  )
}

export default LightBox