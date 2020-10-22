import React from 'react'
import { Main, Title, MoonIcon, ModeContainer, OutlineMoonIcon, SecondTitle } from './Header.style';


export default function Header(props) {

  const alterMoon = () => {
    if(props.theme === 'dark') return <MoonIcon theme={props.theme} />
    return <OutlineMoonIcon theme={props.theme} />
  }

  return (
    <Main theme={props.theme}>
      <Title theme={props.theme}>
        Where in the world?
      </Title>
      <ModeContainer onClick={props.handleTheme}>
        {alterMoon()}
        <SecondTitle theme={props.theme}>
          Dark Mode
        </SecondTitle>
      </ModeContainer>
      
    </Main>
  )
}
