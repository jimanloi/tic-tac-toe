import data from '../data.js';
import isWinner from '../utils/isWinner.js';
import dom from '../dom.js';

const clickHandler = (e) => {
    //if user is clicking on one of the cells
    if (e.target.className !== 'cell') {
        return;
    }

    const targetCell = e.target;

    if (!targetCell.textContent && data.winner === null) {
        const playerSymbol = data.currentPlayer ? 'X' : 'O';
        targetCell.textContent = playerSymbol;

        const playerMoves = data.currentPlayer ? data.x : data.o;
        playerMoves.push(targetCell.id);

        data.cellPlayed[targetCell.id] = playerSymbol;

        if (isWinner(playerMoves)) {
            data.winner = playerSymbol;
            dom.winningMessageTextElement.textContent = `${playerSymbol} wins!`;
            dom.winningMessageElement.style.display = 'block';
        } else {
            data.currentPlayer = !data.currentPlayer;
        }

        if (!data.cellPlayed.includes(null) && data.winner === null) {
            dom.winningMessageElement.style.display = 'block';
            dom.winningMessageTextElement.textContent = `Draw! Play again!`;
        }
    }
};

export default clickHandler;
