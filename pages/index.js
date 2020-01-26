import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";

const GlobalStyle = createGlobalStyle`
@font-face {
font-family: 'Plumpfull Black';
font-style: normal;
font-weight: normal;
src: local('/Plumpfull Black'), url('/Plumpfull.woff') format('woff');
}

body {
  background-color: #fefefe;
  font-size: 16px;
  margin: 0;
  padding: 0;
}
`;
const Container = styled.div`
  max-width: 960px;
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
`;

export default () => (
  <React.Fragment>
    <GlobalStyle />
    <Hero>
      <Navigation />
    </Hero>
    <Container></Container>
  </React.Fragment>
);
