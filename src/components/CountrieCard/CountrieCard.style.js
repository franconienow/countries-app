import styled from "styled-components";

export const Card = styled.div`
  width: 18vw;
  height: 44vh;
  background: ${props => props.theme === 'dark' ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
  color: ${props => props.theme === 'dark' ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
  border-radius: 8px 8px 8px 8px;
  box-shadow: 2px 2px 10px -2px rgba(0,0,0,0.24);
`;

export const Flag = styled.img`
  border-radius: 8px 8px 0 0;
  width: 100%; 
  height: 50%;
`;

export const CardInfoContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 12%;
`;

export const CardInfo = styled.div`
  line-height: 150%;
`;

export const CountryTitle = styled.h2`
  padding-bottom: 17px;
  font-size: 1.5rem;
  font-weight: 800;
`;

export const Info = styled.span`
  font-weight: 600;
`;