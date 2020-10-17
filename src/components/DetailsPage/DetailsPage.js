import React, { useEffect, useState } from 'react';
import { Link , useParams } from "react-router-dom";
import { InfoContainer, Flag, InfoDiv, CName, InfoCol, NeighborBtn } from "./DetailsPage.style";
import { Info } from '../CountrieCard/CountrieCard.style';

function DetailsPage(){

  let { id } = useParams();
  
  const [country, setCountry] = useState({});
  const [neighbors, setNeighbors] = useState([])

  useEffect(() => {
    fetchData();
  }, [id])

  useEffect(() => {
    fetchBordersData()
  }, [country])

  const fetchData = async () => {
    const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`);
    const data = await res.json()
    setCountry(data)
  };

  const fetchBordersData = async () => {
    if(country.borders !== undefined && country.borders.length > 0){
      const res = await fetch(`https://restcountries.eu/rest/v2/alpha?codes=${country.borders.join(';')}`);
      const data = await res.json()

      setNeighbors(data.map(country => {return {name: country.name, id: country.alpha3Code}}));
    }
  };
  
  const renderCurrencies = (curr) => {
    if(curr !== undefined){
      return curr.map(c => c.name).join(", ");
    }
  };

  const renderLangs = (lang) => {
    if(lang !== undefined){
      return lang.map(l => l.name).join(", ");
    }
  };

  const renderBorders = countryList => {
    if(countryList !== undefined){
      return countryList.map((c) => {
        return <Link key={c.id} style={{ textDecoration: 'none', color: 'white' }} to={`/details/${c.id}`}><NeighborBtn>{c.name}</NeighborBtn></Link>       
      }) 
    }
  };

  return(
    <div>
      <Link 
      style={{ textDecoration: 'none', color: 'white' }} to={`/`}><NeighborBtn>Back</NeighborBtn></Link>
      <InfoContainer key={country.id}>
        <Flag src={country.flag} alt={country.name}/>
          <InfoDiv>
            <CName>{country.name}</CName>
            <InfoCol display={'inline'} columnSpace={'1'}>
              <p><Info>Native Name: </Info>{country.nativeName}</p>
              <p><Info>Population: </Info>{Intl.NumberFormat('pt-BR').format(country.population)}</p>
              <p><Info>Region: </Info>{country.region}</p>
              <p><Info>Sub Region: </Info>{country.subregion}</p>
              <p><Info>Capital: </Info>{country.capital}</p>
            </InfoCol>

            <InfoCol display={'inline'} columnSpace={'2'}>
              <p><Info>Top Level Domain: </Info>{country.topLevelDomain}</p>
              <p><Info>Currencies: </Info>{renderCurrencies(country.currencies)}</p>
              <p><Info>Languages: </Info>{renderLangs(country.languages)}</p>
            </InfoCol>

            <InfoCol display={'inline'} columnSpace={'1 / 3'}>
              <Info>Borders: </Info>
              {renderBorders(neighbors)}
            </InfoCol>
          </InfoDiv>
      </InfoContainer>
    </div>
    
  );
};

export default DetailsPage;