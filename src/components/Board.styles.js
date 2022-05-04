import styled from "styled-components";

export const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  margin: 0 auto;
  background-color: #f5f5f5;
  border: 5px solid dodgerblue;
  border-radius: 10px;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;
