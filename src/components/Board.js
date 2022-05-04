import React from "react";
import _ from "lodash";

import Square from "./Square";

import { Wrapper } from "./Board.styles";
const Board = ({ squares, onClick }) => (
  <>
    <Wrapper>
      {_.map(squares, (square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </Wrapper>
  </>
);
export default Board;
