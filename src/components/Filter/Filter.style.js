import styled from "styled-components";
import { ChevronDown } from "@styled-icons/boxicons-regular/ChevronDown";

export const FilterBox = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 8px 8px 8px 8px;
  cursor: pointer;
`;

export const FilterContent = styled.div`
  display: ${props => `${props.toggleShow}`};
  position: absolute;
  background-color: ${props => props.theme === 'dark' ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
  min-width: 230px;
  border-radius: 8px 8px 8px 8px;
  box-shadow: 2px 2px 10px -2px rgba(0,0,0,0.24);
  z-index: 1;
  margin-top: 10px
`;

export const Region = styled.a`
  color: ${props => props.theme === 'dark' ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
`;

export const FilterBtn = styled.div`
  height: 6vh;
  width: 12vw;
  background-color: ${props => props.theme === 'dark' ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
  border-radius: 8px 8px 8px 8px;
  box-shadow: 2px 2px 10px -2px rgba(0,0,0,0.24);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: ${props => props.theme === 'dark' ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
  font-size: 1.1rem;
  font-weight: 600;
`;

export const ArrowIcon = styled(ChevronDown)`
  width: 10%;
  color: ${props => props.theme === 'dark' ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
`;