import Board from "./Board";
import { useState } from "react";

const Player_x = 'X';

const Player_o = 'O';

function TicTacToe() {
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState(Player_x);
    const handleTileClick = (index) => {
        if(tiles[index] !== null){
            return;
        }
        const newTiles = [...tiles];
        newTiles[index] = playerTurn;
        setTiles(newTiles);
        if(playerTurn === Player_x){
            setPlayerTurn(Player_o)
        }
        else{
            setPlayerTurn(Player_x);
        }
    };
     
    return ( 
        <div>
            <h1>Tic Tac Toe</h1>
            <Board tiles = {tiles} onTileClick = {handleTileClick}/>
        </div>

     );
}

export default TicTacToe;