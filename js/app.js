class Player {
    formatName() {
        return this.name.toUpperCase();
    }
}
var _a;
function startGame() {
    let playerName = getInputValue('playername');
    logPlayer(playerName);
    postScore(80, playerName);
    postScore(-5, playerName);
}
function logPlayer(name = 'MulitMath player') {
    console.log(`New game starting for player: ${name}`);
}
function postScore(score, playerName = 'MultiMath Player') {
    let logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    const scoreElement = document.getElementById('postedScores');
    scoreElement.innerText = `${score} - ${playerName}`;
    logger(`Score: ${score}`);
}
(_a = document.getElementById('startGame')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', startGame);
const logMessage = (message) => console.log(message);
function logError(err) {
    console.error(err);
}
const firstPlayer = new Player();
firstPlayer.name = 'Lanier';
console.log(firstPlayer);
//# sourceMappingURL=app.js.map