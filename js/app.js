var _a;
function startGame() {
    let playerName = 'Adrey';
    logPlayer(playerName);
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to MAultiMath! Starting a new game...';
}
function logPlayer(name) {
    console.log(`New game starting for player: ${name}`);
}
(_a = document.getElementById('startGame')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', startGame);
//# sourceMappingURL=app.js.map