export default class GameView {

    constructor() {
        console.log("Init game view")
    }

    updateBoard(game) {
        this.updateTurn(game);
        const winningCombination = game.calculateWinner();
        for(let i = 0; i < game.board.length; i++) {
            const tile = document.querySelector(`.board-tile[data-index='${i}']`);
         
            let titleStyle = game.board[i] == "X" ? "tileX" : "tileO";
            
            tile.classList.remove("tile-winner");

            tile.innerHTML = 
                `<span class="${titleStyle}">
                    ${game.board[i] ? game.board[i] : ""}
                </span>`;

            if(winningCombination && winningCombination.includes(i)) {
                tile.classList.add("tile-winner");
            }
        }
    }

    updateTurn(game) {
        let playerX = document.querySelector(".playerX");
        let playerO = document.querySelector(".playerO");
        playerX.classList.remove("active");
        playerO.classList.remove("active");
        if(game.turn == "X") {
            playerX.classList.add("active");
        }else {
            playerO.classList.add("active") ;
        }
    }
    
}