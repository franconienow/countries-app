import styled from "styled-components";

export const Flag = styled.img`
  width: 50%;
`;

export const InfoDiv = styled.div`
  padding-left:10%;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const InfoContainer = styled.div`
  margin-top: 25vh;
  display: flex;
  justify-content: space-between;
`;

export const CName = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  grid-column: 1 / 3;
`;

export const InfoCol = styled.div`
  grid-column: ${props => `${props.columnSpace}`};;
`;

export const NeighborBtn = styled.button`
  margin-right:1%;
  text-decoration: none;
  border: none;
  outline: none;
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  background-color: hsl(209, 23%, 22%);
  color: inherit;
  border-radius: 3px 3px 3px 3px;
  box-shadow: 10px 10px 10px #1E2934;
  width: 6vw;
  height: 4vh;
  cursor: inherit;
`;

