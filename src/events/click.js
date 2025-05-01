import dom from '../dom.js';
import clickHandler from '../handlers/clickHandler.js';

const clickEvent = () => {
    dom.board.addEventListener('click', clickHandler);
};

export default clickEvent;
