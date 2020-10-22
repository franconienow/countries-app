import React, { useState } from 'react';
import { FilterBox, FilterContent, Region, FilterBtn, ArrowIcon } from "./Filter.style";

const Filter = (props) =>{

  const [switcher, setSwitcher] = useState("none");
  const [currentFilter, setCurrentFilter] = useState("Filter by Region");

  const regionList = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const handleClick = (e) => {
    setCurrentFilter(e.target.innerText);
    toggleMenu()
    props.onClick(e)
  } 

  const createElements = () => {
    return(
      regionList.map(region => <Region key={region} theme={props.theme} onClick={handleClick}>{region}</Region>)
    )  
  }

  const toggleMenu = () => {
    if(switcher === "none"){
      setSwitcher("block");
    }else{
      setSwitcher("none");
    }
  };

  return(
    <FilterBox>
      <FilterBtn theme={props.theme} onClick={toggleMenu} className="dropbtn">{currentFilter}<ArrowIcon theme={props.theme} /></FilterBtn>
      <FilterContent theme={props.theme} toggleShow={switcher}>
        {createElements()}
      </FilterContent>
    </FilterBox>
  );
}; 

export default Filter;