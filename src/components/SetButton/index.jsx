import React from 'react'
import styles from './style.module.scss'
import { useNavigate } from 'react-router-dom';


// export default function BackButton() {
  // {onClick}

export default function SetButton({onClick,icon}) {
  return (
    <div className={styles.container} onClick={onClick}>

   {icon}

    </div>
  )
}
