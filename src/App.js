import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CountrieCard from "./components/CountrieCard/CountrieCard";
import Input from './components/Input/Input'
import Filter from './components/Filter/Filter'
import DetailsPage from './components/DetailsPage/DetailsPage'
import GlobalStyle from './styles/global';
import Header from './components/Header/Header';

function App() {

  const [countryList, setCountryList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [regionFilter, setRegionFilter] = useState("All");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () =>{
    const res = await fetch("https://restcountries.eu/rest/v2/");
    const data = await res.json()
    const cL = data.map(c => {
      return{
        alpha3Code: c.alpha3Code,
        name: c.name,
        population: c.population,
        region: c.region,
        capital: c.capital,
        flag: c.flag
      }
    })
    
    setCountryList(cL);
  }

  const updataSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const updateFiterInput = (e) => {
    setRegionFilter(e.target.innerText);
  };

  const filteredList = () => {
    if(regionFilter === "All"){
      
      return countryList;
    }else{
      return countryList.filter(({region}) => {return region === regionFilter})
    }
  };

  const dynamicSearch = () => {
    return filteredList().filter(({name}) => {
      return name.toLowerCase().includes(searchInput.toLowerCase())})
  };

  const createElements = () => {
    return(
      dynamicSearch().map(country => (
        <CountrieCard theme={theme}
        key={country.alpha3Code} 
        code = {country.alpha3Code} 
        name={country.name}
        population={country.population}
        region={country.region}
        capital={country.capital}
        flag={country.flag}
        />
      ))
    )
  }

  const handleTheme = () => {
    if(theme === 'dark'){
      setTheme('ligth')
    }else{
      setTheme('dark')
    }
  }

  
  return (
    <Router>
      <GlobalStyle theme={theme}/>
      <Header handleTheme={handleTheme} theme={theme}/>
      <div className="main-container">
        <Switch>
          <Route path="/details/:id"><DetailsPage theme={theme} /></Route>
          <Route path="/">
            <div className="inputContainer">
              <Input theme={theme} type="text" value={searchInput} onChange={updataSearchInput}/>
              <Filter theme={theme} onClick={updateFiterInput}/>
            </div>
            <div className='cardsContainer'>
              {createElements()}
            </div>
          </Route>

        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
