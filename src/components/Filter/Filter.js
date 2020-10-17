import React, { useState } from 'react';
import { FilterBox, FilterContent, Region, FilterBtn, ArrowIcon } from "./Filter.style";

const Filter = (props) =>{

  const [switcher, setSwitcher] = useState("none");

  const toggleMenu = () => {
    if(switcher === "none"){
      setSwitcher("block");
    }else{
      setSwitcher("none");
    }
  };

  return(
    <FilterBox>
      <FilterBtn onClick={toggleMenu} className="dropbtn">Filter by Region <ArrowIcon/></FilterBtn>
      <FilterContent toggleShow={switcher}>
        <Region onClick={props.onClick}>All</Region>
        <Region onClick={props.onClick}>Africa</Region>
        <Region onClick={props.onClick}>Americas</Region>
        <Region onClick={props.onClick}>Asia</Region>
        <Region onClick={props.onClick}>Europe</Region>
        <Region onClick={props.onClick}>Oceania</Region>
      </FilterContent>
    </FilterBox>
  );
}; 

export default Filter;