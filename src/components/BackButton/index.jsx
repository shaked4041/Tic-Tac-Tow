import React from 'react'
import styles from './style.module.scss'
import { useNavigate } from 'react-router-dom';


export default function BackButton() {
  // {onClick}

  const nav = useNavigate()
  const handleClick = () => {
    nav(-1)
  }
  return (
    <div className={styles.container} onClick={handleClick}>
      <img src="/Vector.png" alt="vector" style={{height : '18px', width: '33px'}}/>
    </div>
  )
}
