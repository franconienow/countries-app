import React from "react";
import { Card, Flag, CardInfo, Info, CardInfoContainer, CountryTitle } from "./CountrieCard.style";
import { Link } from "react-router-dom";

const CountrieCard = props =>{
  return(
    <Link style={{ textDecoration: 'none', color: 'white' }} to={`/details/${props.code}`}>
      <Card theme={props.theme}>
        <Flag src={props.flag} alt={props.name}/>
        <CardInfoContainer>
          <CardInfo>
            <CountryTitle>{props.name}</CountryTitle>
            <p><Info>Population:</Info> {Intl.NumberFormat('pt-BR').format(props.population)}</p>
            <p><Info>Region:</Info> {props.region}</p>
            <p><Info>Capital:</Info> {props.capital}</p>
          </CardInfo> 
        </CardInfoContainer>
      </Card>
    </Link>
  );
};

export default CountrieCard;