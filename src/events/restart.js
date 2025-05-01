import dom from '../dom.js';
import restartGame from '../handlers/restartGame.js';

const restart = () => {
    dom.restartButton.addEventListener('click', restartGame);
};

export default restart;
