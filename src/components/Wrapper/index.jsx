import React from 'react'
import styles from './style.module.scss'


export default function Wrapper({ children ,titel}) {
  return (
    <fieldset className={styles.container}>
      <legend className={styles.titel} >{titel}</legend>
      {children}
    </fieldset>
  )
}
