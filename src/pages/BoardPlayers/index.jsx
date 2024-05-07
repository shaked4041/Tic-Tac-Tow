import React, { useEffect, useState } from 'react'
import styles from './style.module.scss';
import Wrapper from '../../components/Wrapper/index'
import BackCard from '../../components/BackCard/index'
import MainButton from '../../components/MainButton/index'
import ShapeX from '../../components/ShapeX/index'
import ShapeO from '../../components/ShapeO/index'


export default function BoardPlayers() {

    let options = [<ShapeX />, <ShapeO />]

    const [clickedCards, setClickedCards] = useState(Array(9).fill(null));
    const [bColor, setBColor] = useState(null)
    const [isXNext, setIsXNext] = useState(false);
    const [win, setWin] = useState(false);

    // useEffect(() => {
    //     checkWin();
    // }, [clickedCards]);
    

    const checkWin = () => {
        // alert('hi')
        // setTimeout(() => {
        //     console.log("This message will be logged after 2 seconds.");
        // }, 2000);


        
            }

    const handleClick = (index) => {
        if (clickedCards[index] === null) {
            const newClickedCards = [...clickedCards];
            newClickedCards[index] = isXNext ? options[0] : options[1];
            setClickedCards(newClickedCards);
            setIsXNext(!isXNext);
            checkWin()
        }
    };

    const handleWin = () => {
        setWin(true)
        setBColor('#D1D1D1')
    };

    const backCardComponents = clickedCards.map((shape, index) => (
        <div onClick={() => {
            handleClick(index)
            // checkWin()
        }
        } key={index}>
            <BackCard width={'80px'} height={'80px'} color={shape ? null : bColor}>
                <div>
                    {shape}
                </div>
            </BackCard>
        </div>
    ));

    return (
        <div className={styles.container}>
            <svg className={styles.borderPhoto} width="1282" height="30" viewBox="0 0 1282 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_45_343)">
                    <path d="M1288 29H0L639.5 24.2174L1288 7L1288 29Z" fill="#B28100" />
                </g>
            </svg>
            <div className={styles.yellowBlock}></div>
            <div className={styles.wrapper}>
                <Wrapper>
                    <div className={styles.gridContainer}>
                        {backCardComponents.map((card, index) => (
                            <div key={index} className={styles.gridItem}>
                                {card}
                            </div>
                        ))}
                    </div>
                </Wrapper>
            </div>
            <div className={styles.button}>
                <MainButton width={'170px'} height={'70px'} text={'BACK'} />
            </div>

            <button onClick={handleWin}>win</button>
        </div>
    )
}
