import React, { useEffect, useState } from 'react'
import styles from './style.module.scss';
import Wrapper from '../../components/Wrapper/index'
import BackCard from '../../components/BackCard/index'
import MainButton from '../../components/MainButton/index'
import ShapeX from '../../components/ShapeX/index'
import ShapeO from '../../components/ShapeO/index'


export default function BoardPlayers() {

    // let options = [<ShapeX {...st} />, <ShapeO {...st} />]

    const [clickedCards, setClickedCards] = useState(Array(9).fill(null));
    const [bColor, setBColor] = useState(null)
    const [isXNext, setIsXNext] = useState(false);
    const [win, setWin] = useState(false);
    const [xClicks, setXClicks] = useState([]);
    const [oClicks, setOClicks] = useState([]);
    const [winCombo, setWinCombo] = useState(null)
    const [notWinIndex, setNotWinIndex] = useState([]);
    const [options, setOptions] = useState([<ShapeX />, <ShapeO />]);


    let amtOfCards = 9
    let rootOfAmnt = Math.sqrt(amtOfCards);


    const generateWinningCombos = (size) => {
        const combos = [];
        // Rows
        for (let i = 0; i < size; i++) {
            const rowCombo = [];
            for (let j = 0; j < size; j++) {
                rowCombo.push(i * size + j);
            }
            combos.push(rowCombo);
        }
        // Columns
        for (let i = 0; i < size; i++) {
            const colCombo = [];
            for (let j = 0; j < size; j++) {
                colCombo.push(i + j * size);
            }
            combos.push(colCombo);
        }
        // Diagonals
        const diag1 = [];
        const diag2 = [];
        for (let i = 0; i < size; i++) {
            diag1.push(i * (size + 1));
            diag2.push((i + 1) * (size - 1));
        }
        combos.push(diag1, diag2);
        return combos;
    };

    let winningCombos = generateWinningCombos(rootOfAmnt);


    const checkWin = (playerClicks, player) => {
        for (let combo of winningCombos) {
            if (combo.every(index => playerClicks.includes(index))) {
                setWinCombo(combo)
                handleWin();
                return;
            }
        }
    };

    const handleClick = (index) => {
        if (clickedCards[index] === null && !win) {
            const newClickedCards = [...clickedCards];
            newClickedCards[index] = isXNext ? options[0] : options[1];
            setClickedCards(newClickedCards);
            if (isXNext) {
                setXClicks(prevClicks => [...prevClicks, index]);
            } else {
                setOClicks(prevClicks => [...prevClicks, index]);
            }
            checkWin(isXNext ? [...xClicks, index] : [...oClicks, index], isXNext ? 'x' : 'o');
            setIsXNext(!isXNext);
        }
    };

    const handleWin = () => {
        setWin(true)
        setBColor('#D1D1D1')
    };
    useEffect(() => {
        if (winCombo !== null) {
            const notWin = [];
            clickedCards.forEach((card, index) => {
                if (card !== null && !winCombo.includes(index)) {
                    notWin.push(index);
                }
            });
            setNotWinIndex(notWin);
        }
    }, [winCombo, clickedCards]);

    // const backCardComponents = clickedCards.map((shape, index) => {
    //     let st = notWinIndex.includes(index) ? { fill: '#9B9B9B' } : {};}

    // const backCardComponents = clickedCards.map((shape, index) => (
    //     <div onClick={() => { handleClick(index) }
    //     } key={index}>
    //         <BackCard width={'80px'} height={'80px'} color={shape ? null : bColor}>
    //             <div>
    //                 {shape}
    //             </div>
    //         </BackCard>
    //     </div>
    // ));


    // let cards = clickedCards.map((shape, index) => {
    //     let st = notWinIndex.includes(index) ? { fill: '#9B9B9B' } : {};
    //     setOptions([<ShapeX {...st} />, <ShapeO {...st} />])
    // })

      useEffect(() => {
        // Update options when notWinIndex changes
        let st = notWinIndex.map(index => notWinIndex.includes(index) ? { fill: '#9B9B9B' } : {});
        setOptions([<ShapeX {...st} />, <ShapeO {...st} />]);
    }, [notWinIndex]);


    const backCardComponents = clickedCards.map((shape, index) => (
        <div onClick={() => handleClick(index)} key={index}>
            <BackCard width={'80px'} height={'80px'} color={shape ? null : bColor}>
                <div>
                    {shape}
                    {/* === null ? null : options[isXNext ? 0 : 1] */}
                </div>
            </BackCard>
        </div>
    ));
    return (
        <div className={styles.container}>
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

        </div>
    )
}
