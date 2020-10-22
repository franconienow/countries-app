import styled from "styled-components";
import { Moon as OutlineMoon } from '@styled-icons/boxicons-regular/Moon';
import { Moon } from '@styled-icons/bootstrap/Moon';

export const Main = styled.header`
  height: 80px;
  background: ${props => props.theme === 'dark' ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.span`
  color: ${props => props.theme === 'dark' ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
  font-size: 1.5rem;
  font-weight: 800;
`;

export const ModeContainer = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const OutlineMoonIcon = styled(OutlineMoon)`
  width: 24px;
  color: ${props => props.theme === 'dark' ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
`;

export const MoonIcon = styled(Moon)`
  width: 24px;
  color: ${props => props.theme === 'dark' ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
`;

export const SecondTitle = styled.span`
  font-weight:600;
  font-size: 1.2rem;
  color: ${props => props.theme === 'dark' ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
`;