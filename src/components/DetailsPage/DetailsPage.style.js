import styled from "styled-components";
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack';

export const Flag = styled.img`
  width: 50%;
`;

export const InfoDiv = styled.div`
  padding-left:10%;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  color: ${props => props.theme === 'dark' ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
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
  background-color: ${props => props.theme === 'dark' ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
  color: ${props => props.theme === 'dark' ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
  border-radius: 3px 3px 3px 3px;
  box-shadow: 2px 2px 10px -2px rgba(0,0,0,0.24);
  width: 6vw;
  height: 4vh;
  cursor: inherit;
`;

export const BackBtn = styled.button`
  margin-right:1%;
  text-decoration: none;
  border: none;
  outline: none;
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  background-color: ${props => props.theme === 'dark' ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
  color: ${props => props.theme === 'dark' ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
  border-radius: 3px 3px 3px 3px;
  box-shadow: 2px 2px 10px -2px rgba(0,0,0,0.24);
  width: 7vw;
  height: 5vh;
  cursor: inherit;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: 18vh;
`;

export const BackIcon = styled(ArrowBack)`
  width: 24%;
  color: ${props => props.theme === 'dark' ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
`

