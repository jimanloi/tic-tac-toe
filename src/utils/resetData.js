const resetData = (data) => {
    data.cellPlayed = [null, null, null, null, null, null, null, null, null];
    data.currentPlayer = true;
    data.x = [];
    data.o = [];
    data.winner = null;
};

export default resetData;
