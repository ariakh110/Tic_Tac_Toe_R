import React from "react";

import { Button } from "./Square.styles";
const Square = ({ value, onClick }) => (
  <>
    <Button onClick={onClick}>{value}</Button>
  </>
);

export default Square;
