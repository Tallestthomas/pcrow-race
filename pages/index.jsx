import React from 'react';
import fetch from 'isomorphic-unfetch';
import styled, { createGlobalStyle } from 'styled-components';
import { Hero, MapSection, Rules, Racers, Routing } from '../components';

const GlobalStyle = createGlobalStyle`
@font-face {
font-family: 'Plumpfull Black';
font-style: normal;
font-weight: normal;
src: local('/Plumpfull Black'), url('/Plumpfull.woff') format('woff');
}
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

* {
  box-sizing: border-box;
}

body {
  background-color: #fefefe;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  padding: 0;
}
`;

const Container = styled.div`
  max-width: 960px;
  padding: 0 1rem;
  margin: 0 auto;
`;

class Home extends React.Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const data = await fetch('/api');
    const users = await data.json();

    this.setState({ users });
  }

  render() {
    const { users } = this.state;

    return (
      <>
        <GlobalStyle />
        <Hero />
        {users && (
          <Container>
            <MapSection users={users} />
            <Rules />
            <Routing />
            <Racers users={users} />
          </Container>
        )}
      </>
    );
  }
}

export default Home;
