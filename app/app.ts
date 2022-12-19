/// <reference path="player.ts" />

function startGame(){
    //starting a new game
    
    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);

    postScore(80, playerName);
    postScore(-5, playerName);
}

function logPlayer(name : string = 'MulitMath player') : void {
    console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementID: string): string | undefined {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

    if(inputElement.value === ''){
        return undefined;
    }
    else{
        return inputElement.value;
    }
}

function postScore(score: number, playerName: string ='MultiMath Player'): void {
    
    //logger tar in vilken function som helst som tar in en string och returnar void.
    let logger: (value: string) => void;

    if(score < 0){
        logger = logError; 
    }
    else{
        logger= logMessage;
    }
    
    const scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;

    logger(`Score: ${score}`);
}

document.getElementById('startGame')?.addEventListener('click', startGame);

//Arrow functions are anonymous
const logMessage =  (message: string) => console.log(message);

function logError(err: string): void {
    console.error(err);
}

const firstPlayer: Player = new Player();
firstPlayer.name = 'Lanier';
console.log(firstPlayer);

