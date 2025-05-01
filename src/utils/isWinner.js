import data from '../data.js';

/**
 * Check a player is the winner
 *
 * @param {arr}
 * @returns {boolean} - True if win
 */

const isWinner = (arr) => {
    const sortedArr = [...arr].map(Number).sort();
    return data.winningCombinations.some((combination) =>
        combination.every((cell) => sortedArr.includes(cell))
    );
};

export default isWinner;
