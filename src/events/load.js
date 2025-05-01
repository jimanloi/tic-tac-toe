import loadHandler from '../handlers/loadHandler.js';

const loadPage = () => {
    window.addEventListener('load', loadHandler);
};

export default loadPage;
