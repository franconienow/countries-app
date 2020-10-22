import React from "react";
import { SearchInput, SearchBox, SearchIcon } from "./Input.style";

const Input = (props) =>{
  return(
    <SearchBox theme={props.theme}>
      <SearchInput theme={props.theme} onChange={props.onChange} placeholder="Search for a country..."/>
      <SearchIcon theme={props.theme}/>
    </SearchBox>
  );
}; 

export default Input;