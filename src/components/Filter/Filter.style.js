import styled from "styled-components";
import { ChevronDown } from "@styled-icons/boxicons-regular/ChevronDown";

export const FilterBox = styled.div`
  position: relative;
  display: inline-block;
`;

export const FilterContent = styled.div`
  display: ${props => `${props.toggleShow}`};
  position: absolute;
  background-color: #f6f6f6;
  min-width: 230px;
  border: 1px solid #ddd;
  z-index: 1;
`;

export const Region = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
`;

export const FilterBtn = styled.div`
  height: 6vh;
  width: 12vw;
  background-color: hsl(209, 23%, 22%);
  border-radius: 8px 8px 8px 8px;
  box-shadow: 10px 10px 10px #1E2934;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: inherit;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
`;

export const ArrowIcon = styled(ChevronDown)`
  width: 10%;
  color: inherit;
`;