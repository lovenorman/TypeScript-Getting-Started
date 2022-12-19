var _a;
function startGame() {
    //starting a new game
    var playerName = getInputValue('playername');
    logPlayer(playerName);
    postScore(80, playerName);
    postScore(-5, playerName);
}
function logPlayer(name) {
    if (name === void 0) { name = 'MulitMath player'; }
    console.log("New game starting for player: ".concat(name));
}
function getInputValue(elementID) {
    var inputElement = document.getElementById(elementID);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
function postScore(score, playerName) {
    if (playerName === void 0) { playerName = 'MultiMath Player'; }
    //logger tar in vilken function som helst som tar in en string och returnar void.
    var logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    var scoreElement = document.getElementById('postedScores');
    scoreElement.innerText = "".concat(score, " - ").concat(playerName);
    logger("Score: ".concat(score));
}
(_a = document.getElementById('startGame')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', startGame);
//Arrow functions are anonymous
var logMessage = function (message) { return console.log(message); };
function logError(err) {
    console.error(err);
}
var firstPlayer = new Player();
firstPlayer.name = 'Lanier';
console.log(firstPlayer);
