import { useSpring, animated } from 'react-spring';
import React from 'react'
import styles from './style.module.scss'

export default function index() {


  return (
<div className={styles.spinner}>
<svg width="90" height="90" viewBox="0 0 327 327" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M194.156 30.6562C194.156 47.5874 180.431 61.3125 163.5 61.3125C146.569 61.3125 132.844 47.5874 132.844 30.6562C132.844 13.7251 146.569 0 163.5 0C180.431 0 194.156 13.7251 194.156 30.6562ZM163.5 265.688C146.569 265.688 132.844 279.413 132.844 296.344C132.844 313.275 146.569 327 163.5 327C180.431 327 194.156 313.275 194.156 296.344C194.156 279.413 180.431 265.688 163.5 265.688ZM296.344 132.844C279.413 132.844 265.688 146.569 265.688 163.5C265.688 180.431 279.413 194.156 296.344 194.156C313.275 194.156 327 180.431 327 163.5C327 146.569 313.275 132.844 296.344 132.844ZM61.3125 163.5C61.3125 146.569 47.5874 132.844 30.6562 132.844C13.7251 132.844 0 146.569 0 163.5C0 180.431 13.7251 194.156 30.6562 194.156C47.5874 194.156 61.3125 180.431 61.3125 163.5ZM69.5654 226.778C52.6342 226.778 38.9092 240.503 38.9092 257.435C38.9092 274.366 52.6342 288.091 69.5654 288.091C86.4966 288.091 100.222 274.366 100.222 257.435C100.222 240.504 86.496 226.778 69.5654 226.778ZM257.435 226.778C240.503 226.778 226.778 240.503 226.778 257.435C226.778 274.366 240.503 288.091 257.435 288.091C274.366 288.091 288.091 274.366 288.091 257.435C288.091 240.504 274.366 226.778 257.435 226.778ZM69.5654 38.9092C52.6342 38.9092 38.9092 52.6342 38.9092 69.5654C38.9092 86.4966 52.6342 100.222 69.5654 100.222C86.4966 100.222 100.222 86.4966 100.222 69.5654C100.222 52.6342 86.496 38.9092 69.5654 38.9092Z" fill="url(#paint0_linear_78_405)"/>
<defs>
<linearGradient id="paint0_linear_78_405" x1="163.5" y1="0" x2="163.5" y2="327" gradientUnits="userSpaceOnUse">
<stop stopColor="#FCD015"/>
<stop offset="1" stopColor="#FBB500"/>
</linearGradient>
</defs>
</svg>
</div>
  )
}
