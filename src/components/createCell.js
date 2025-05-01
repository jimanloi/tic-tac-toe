import dom from '../dom.js';

const createCell = (domEl) => {
    const board = document.getElementById('board');
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = `${i}`;
        board.append(cell);
    }
    return board;
};

export default createCell;
