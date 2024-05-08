import React from 'react'
import styles from './style.module.scss'
import Spinner from '../../components/Spinner'
import BackButton from '../../components/BackButton'

export default function
    () {
    return (
        <div className={styles.waitingJoin}>

            <div className={styles.back}><BackButton /></div>
            <div className={styles.center}>
            <div className={styles.spinner}>
                <Spinner />
            </div>
            <span className={styles.titel}>waiting...</span>
            <span className={styles.titel}>join to the game</span>
            </div>
        </div>
    )
}
