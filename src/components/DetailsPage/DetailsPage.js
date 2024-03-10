import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  InfoContainer,
  Flag,
  InfoDiv,
  CName,
  InfoCol,
  NeighborBtn,
  BackBtn,
  BackIcon,
} from "./DetailsPage.style";
import { Info } from "../CountrieCard/CountrieCard.style";

function DetailsPage(props) {
  let { id } = useParams();

  const [country, setCountry] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
      const data = await res.json();
      console.log(data[0]);
      if (data[0]) {
        setCountry({
          id: data[0].cca2,
          name: data[0].name.common,
          flag: data[0].flags.svg,
          nativeNames: data[0].name.nativeName,
          population: data[0].population,
          region: data[0].region,
          subregion: data[0].subregion,
          capital: data[0].capital ? data[0].capital[0] : "",
          topLevelDomain: data[0].tld[0],
          currencies: data[0].currencies,
          languages: data[0].languages,
          borders: data[0].borders,
        });
      }
    };
    fetchData();
  }, [id]);

  const renderCurrencies = (currencies) => {
    if (currencies !== undefined) {
      let currenciesArr = [];
      for (const prop in currencies) {
        currenciesArr.push(currencies[prop].name);
      }
      return currenciesArr.join(", ");
    }
  };

  const renderLangs = (langs) => {
    if (langs !== undefined) {
      let langsArr = [];
      for (const prop in langs) {
        langsArr.push(langs[prop]);
      }
      return langsArr.join(", ");
    }
  };

  const renderNativeNames = (nativeNames) => {
    if (nativeNames !== undefined) {
      let nativeNamesArr = [];
      for (const prop in nativeNames) {
        nativeNamesArr.push(nativeNames[prop].common);
      }
      return nativeNamesArr.join(", ");
    }
  };

  const renderBorders = (countryList) => {
    if (countryList !== undefined) {
      console.log(countryList);
      return countryList.map((countryName) => {
        return (
          <Link
            key={countryName}
            style={{ textDecoration: "none", color: "white" }}
            to={`/details/${countryName}`}
          >
            <NeighborBtn theme={props.theme}>{countryName}</NeighborBtn>
          </Link>
        );
      });
    }
  };

  return (
    <div>
      <Link style={{ textDecoration: "none", color: "white" }} to={`/`}>
        <BackBtn theme={props.theme}>
          <BackIcon theme={props.theme} />
          Back
        </BackBtn>
      </Link>
      <InfoContainer key={country.id}>
        <Flag src={country.flag} alt={country.name} />
        <InfoDiv theme={props.theme}>
          <CName>{country.name}</CName>
          <InfoCol display={"inline"} columnSpace={"1"}>
            <p>
              <Info>Native Name: </Info>
              {renderNativeNames(country.nativeNames)}
            </p>
            <p>
              <Info>Population: </Info>
              {Intl.NumberFormat("pt-BR").format(country.population)}
            </p>
            <p>
              <Info>Region: </Info>
              {country.region}
            </p>
            <p>
              <Info>Sub Region: </Info>
              {country.subregion}
            </p>
            <p>
              <Info>Capital: </Info>
              {country.capital}
            </p>
          </InfoCol>

          <InfoCol display={"inline"} columnSpace={"2"}>
            <p>
              <Info>Top Level Domain: </Info>
              {country.topLevelDomain}
            </p>
            <p>
              <Info>Currencies: </Info>
              {renderCurrencies(country.currencies)}
            </p>
            <p><Info>Languages: </Info>{renderLangs(country.languages)}</p>
          </InfoCol>

          <InfoCol display={"inline"} columnSpace={"1 / 3"}>
            <Info>Borders: </Info>
            {renderBorders(country.borders)}
          </InfoCol>
        </InfoDiv>
      </InfoContainer>
    </div>
  );
}

export default DetailsPage;
