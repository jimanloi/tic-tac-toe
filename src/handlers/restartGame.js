import data from '../data.js';
import dom from '../dom.js';
import resetData from '../utils/resetData.js';

const restartGame = () => {
    console.log('restart');
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => (cell.innerHTML = ''));

    resetData(data);

    dom.winningMessageTextElement.textContent = '';
    dom.winningMessageElement.style.display = 'none';
};

export default restartGame;
