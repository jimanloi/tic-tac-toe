import createCell from '../components/createCell.js';
import dom from '../dom.js';

const loadHandler = () => {
    dom.board.append(createCell());
};

export default loadHandler;
