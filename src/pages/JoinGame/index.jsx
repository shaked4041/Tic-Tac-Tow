import React from 'react'
import styles from './style.module.scss'
import BackButton from '../../components/BackButton'
import MainButton from '../../components/MainButton'
import Wrapper from '../../components/Wrapper'

const text1 = "join"
const height1 = '60px'
const width1 = '160px'

const text2 = "create a game"
const height2 = '70px'
const width2 = '300px'

export default function JoinGame() {
    return (
        <div className={styles.joinGame}>
            <div className={styles.back}><BackButton /></div>
            < div className={styles.center} >

                <div className={styles.fTitel}>
                    <div className={styles.elips}></div>
                    <span className={styles.titel}>join to a game</span>
                </div>

                <div className={styles.enterCode}>
                    <Wrapper><span className={styles.enterCode}>enter code game</span></Wrapper>
                </div>

                <div className={styles.btn1}>
                    <MainButton className={styles.btn1} text={text1} height={height1} width={width1}></MainButton>
                </div>

                <div className={styles.or}>
                    <div className={styles.line}></div>
                    <span className={styles.titel}>or</span>
                    <div className={styles.line}></div>
                </div>

                <div className={styles.btn1}>
                    <MainButton  text={text2} height={height2} width={width2}></MainButton>
                </div>
            </div>

        </div>
    )
}
