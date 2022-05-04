import React, { useState } from "react";
import _ from "lodash";

import { CalculateWinner } from "../helpers";
import Board from "./Board";

import { Wrapper } from "./Game.styles";

const Game = () => {
  // history is an array of objects
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = CalculateWinner(history[stepNumber]);

  const handleClick = (i) => {
    const historyCopy = history.slice(0, stepNumber + 1);
    const current = historyCopy[historyCopy.length - 1];
    const squares = [...current];
    //if user clicks an occupied square or if the game is won, return
    if (winner || squares[i]) {
      return;
    }
    //set the clicked square to the current player
    squares[i] = xIsNext ? "X" : "O";
    setHistory([...historyCopy, squares]);
    setStepNumber(historyCopy.length);
    setXIsNext(!xIsNext);
  };
  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };
  const rednerMoves = () => {
    return _.map(history, (_step, move) => {
      const desc = move ? `Go to move #${move}` : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{desc}</button>
        </li>
      );
    });
  };
  //reset Game
  const resetGame = () => {
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setXIsNext(true);
  };
  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <Wrapper>
        {winner ? "winner: " + winner : "Next player: " + (xIsNext ? "X" : "O")}
        <button onClick={resetGame}>Reset</button>
        <ul>{rednerMoves()}</ul>
      </Wrapper>
    </>
  );
};

export default Game;
