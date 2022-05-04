import styled from "styled-components";

// Wrapper is a component
export const Wrapper = styled.div`
  width: 470px;
  margin: 20px auto;
  background: #fff;
  padding: 20px;
  border: 1px solid dodgerblue !important;
  border-radius: 10px;
  justify-content: center;
  text-align: center;

  > ul {
    border: 1px solid dodgerblue;
    border-radius: 10px;
    padding: 20px;
    > li {
      margin: 10px;
      font-size: 20px;
      font-weight: 800;
      list-style-type: none;
      > button {
        padding: 20px 60px;
      }
    }
  }
`;
