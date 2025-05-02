import dom from '../dom.js';

const createCell = () => {
    const board = document.createElement('div');
    board.classList.add('cellContainer');
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = `${i}`;
        board.append(cell);
    }
    return board;
};

export default createCell;
