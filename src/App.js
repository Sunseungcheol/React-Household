import React from 'react';
import './reset.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Template from './components/Template';
import HouseholdHead from './components/HouseholdHead';
import CategorySelect from './components/CategorySelect';
import HouseholdList from './components/HouseholdList';
import HouseholdCreate from './components/HouseholdCreate';
import { HouseProvider } from './components/HouseholdContext';

const GlobalStyle = createGlobalStyle`
  body{
    background-color:#b7b7b7;
      }
`;

function App() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: '#228be6',
          pink: '#f06595',
        },
      }}
    >
      <>
        <HouseProvider>
          <GlobalStyle></GlobalStyle>
          <Template>
            <HouseholdHead></HouseholdHead>
            <HouseholdList></HouseholdList>
            <HouseholdCreate></HouseholdCreate>
          </Template>
        </HouseProvider>
      </>
    </ThemeProvider>
  );
}

export default App;
