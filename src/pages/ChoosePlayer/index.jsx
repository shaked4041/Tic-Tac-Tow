import React from 'react'
import BackButton from '../../components/BackButton'
import styles from './style.module.scss'
import Wrrapper from '../../components/Wrrapper'
import ShapeX from '../../components/ShapeX'
import ShapeO from '../../components/ShapeO'
import BackCard from '../../components/BackCard'


export default function ChoosePlayer() {
  return (
    <div className={styles.container}>
      <div className={styles.backButton}>
        <BackButton />
      </div>
      <div className={styles.headlineWrapper}>
        <div className={styles.elipse} /> 
        <span className={styles.text}>Choose Player</span>
      </div>

      <div className={styles.table}>
        <Wrrapper>
          <BackCard height="150px" width="150px">
            <ShapeX height="80px" width="80px" />
          </BackCard>
          <BackCard height="150px" width="150px">
            <ShapeO height="80px" width="80px" />
          </BackCard>
        </Wrrapper>
      </div>
    </div>
  )
}
