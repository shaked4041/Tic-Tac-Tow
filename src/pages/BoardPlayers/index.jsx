import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Wrapper from '../../components/Wrapper/index';
import BackCard from '../../components/BackCard/index';
import MainButton from '../../components/MainButton/index';
import ShapeX from '../../components/ShapeX/index';
import ShapeO from '../../components/ShapeO/index';
import { useNavigate } from 'react-router-dom';

const BoardPlayers = () => {
    const amtOfCards = 9;
    const [clickedCells, setClickedCells] = useState(Array(amtOfCards).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [win, setWin] = useState(false);
    const [bColor, setBColor] = useState(null);
    const [options] = useState([<ShapeX />, <ShapeO />]);
    const [winCombo, setWinCombo] = useState([]);
     const nav = useNavigate()

    useEffect(() => {
        if (checkWinner()) {
            setWin(true);
            console.log(`${!isXNext ? 'X' : 'O'} is the winner`);
            setBColor('#D1D1D1');
            updateCellBackground();
        }
    }, [clickedCells, isXNext]);

    useEffect(() => {
        console.log(winCombo);
    }, [winCombo]);

    const handleClick = (index) => {
        if (clickedCells[index] !== null || win) return;

        const newClickedCells = [...clickedCells];
        newClickedCells[index] = isXNext ? options[0] : options[1];
        setClickedCells(newClickedCells);
        setIsXNext(!isXNext);
    };

    const checkWinner = () => {
        const rootOfAmt = Math.sqrt(amtOfCards);

        // Check rows
        for (let i = 0; i < rootOfAmt; i++) {
            let row = [];
            for (let j = 0; j < rootOfAmt; j++) {
                row.push(i * rootOfAmt + j);
            }
            if (row.every(cellIndex => clickedCells[cellIndex] === clickedCells[row[0]] && clickedCells[row[0]] !== null)) {
                setWinCombo(row);
                return true;
            }
        }

        // Check columns
        for (let i = 0; i < rootOfAmt; i++) {
            let col = [];
            for (let j = 0; j < rootOfAmt; j++) {
                col.push(j * rootOfAmt + i);
            }
            if (col.every(cellIndex => clickedCells[cellIndex] === clickedCells[col[0]] && clickedCells[col[0]] !== null)) {
                setWinCombo(col);
                return true;
            }
        }

        // Check diagonals
        let diagonal1 = [];
        let diagonal2 = [];
        for (let i = 0; i < rootOfAmt; i++) {
            diagonal1.push(i * rootOfAmt + i);
            diagonal2.push(i * rootOfAmt + (rootOfAmt - 1 - i));
        }
        if (diagonal1.every(cellIndex => clickedCells[cellIndex] === clickedCells[diagonal1[0]] && clickedCells[diagonal1[0]] !== null)) {
            setWinCombo(diagonal1);
            return true;
        }
        if (diagonal2.every(cellIndex => clickedCells[cellIndex] === clickedCells[diagonal2[0]] && clickedCells[diagonal2[0]] !== null)) {
            setWinCombo(diagonal2);
            return true;
        }

        return false;
    };

    const updateCellBackground = () => {
        // Implement cell background update logic
    };

    const renderGridItem = (index) => (
        <div onClick={() => handleClick(index)} key={index} className={styles.gridItem}>
            <BackCard width={'80px'} height={'80px'} color={clickedCells[index] ? null : bColor}>
                <div>
                    {clickedCells[index]}
                </div>
            </BackCard>
        </div>
    );

    const gridItems = clickedCells.map((_, index) => renderGridItem(index));

    return (
        <div className={styles.container}>
            <div className={styles.yellowBlock}></div>
            <div className={styles.wrapper}>
                <Wrapper>
                    <div className={styles.gridContainer}>
                        {gridItems}
                    </div>
                </Wrapper>
            </div>
            <div className={styles.button}>
                <MainButton width={'170px'} height={'70px'} text={'BACK'} onClick={()=> nav('/menu')}/>
            </div>
        </div>
    );
};

export default BoardPlayers;



// const amtOfCards = 9;
// const [clickedCards, setClickedCards] = useState(Array(amtOfCards).fill(null));
// const [bColor, setBColor] = useState(null)
// const [isXNext, setIsXNext] = useState(false);
// const [win, setWin] = useState(false);
// const [xClicks, setXClicks] = useState([]);
// const [oClicks, setOClicks] = useState([]);
// const [winCombo, setWinCombo] = useState(null)
// const [notWinIndex, setNotWinIndex] = useState([]);
// const [options, setOptions] = useState([<ShapeX />, <ShapeO />]);

//     const backCardComponents = clickedCards.map((shape, index) => (
//         <div onClick={() => handleClick(index)} key={index}>
//             <BackCard width={'80px'} height={'80px'} color={shape ? null : bColor}>
//                 <div>
//                     {shape}
//                 </div>
//             </BackCard>
//         </div>
//     ));
//     return (
//         <div className={styles.container}>
//             <div className={styles.yellowBlock}></div>
//             <div className={styles.wrapper}>
//                 <Wrapper>
//                     <div className={styles.gridContainer}>
//                         {backCardComponents.map((card, index) => (
//                             <div key={index} className={styles.gridItem}>
//                                 {card}
//                             </div>
//                         ))}
//                     </div>
//                 </Wrapper>
//             </div>
//             <div className={styles.button}>
//                 <MainButton width={'170px'} height={'70px'} text={'BACK'} />
//             </div>
//         </div>
//     )
// }
