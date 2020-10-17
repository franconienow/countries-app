import React from "react";
import { SearchInput, SearchBox, SearchIcon } from "./Input.style";

const Input = (props) =>{
  return(
    <SearchBox>
      <SearchInput value={props.value} onChange={props.onChange} placeholder="Search for a country..."/>
      <SearchIcon/>
    </SearchBox>
  );
}; 

export default Input;