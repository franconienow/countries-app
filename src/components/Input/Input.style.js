import styled from "styled-components";
import { Search } from "@styled-icons/boxicons-regular/Search";

export const SearchBox = styled.div`
  height: 6vh;
  width: 28vw;
  background-color: hsl(209, 23%, 22%);
  border-radius: 8px 8px 8px 8px;
  box-shadow: 10px 10px 10px #1E2934;
  padding-left: 5%;
  position: relative;
`

export const SearchInput = styled.input`
  background-color: inherit;
  border: none;
  background-image:none;
  box-shadow: none;
  outline: none;
  color: inherit;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  width: 100%;
  height: 100%;
  border-radius: 8px 8px 8px 8px;
  
  &::placeholder {
    color: inherit;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.1rem;
    font-weight: 300;
  }
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  left: 6%;
  top: 28%;
  width: 4%;
  color: hsl(0, 0%, 100%);
`;
