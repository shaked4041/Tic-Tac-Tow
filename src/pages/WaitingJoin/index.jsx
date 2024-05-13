import React, { useEffect } from 'react'
import styles from './style.module.scss'
import Spinner from '../../components/Spinner'
import BackButton from '../../components/BackButton'
import { useNavigate } from 'react-router-dom';
import useSocket from '../../socket';


export default function waitingJoin() {
    
    const socket = useSocket();
    const nav = useNavigate()

    useEffect(() => {
        socket.on('startPlay', ()=>{
          nav('/boardPlayers');
        })
      }, [socket])

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
