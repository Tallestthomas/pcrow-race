import React from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import styled, { createGlobalStyle } from 'styled-components';

import nodes from '../../data/nodes';
import MapSection from '../../components/MapSection';

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

h2 {
  text-transform: uppercase;
};
`;

const Container = styled.div`
  max-width: 960px;
  padding: 0 1rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
`;

const Button = styled.button`
  padding: 1rem;
  font-size: 1.1rem;
  background-color: #26a015;
  color: #fefefe;
  margin: 1rem;
`;

class RacerPage extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      currentPosition: 0,
    };
  }

  interval = null;

  static getInitialProps() {
    return { user: [] };
  }

  async componentDidMount() {
    const { username } = Router.query;
    const data = await fetch(`/api/user/${username}`);
    const user = await data.json();

    this.setState({
      username,
      currentPosition: user[0].data.currentPosition,
    });
  }

  handleNextStep = () => {
    const { currentPosition, username } = this.state;
    if (currentPosition + 1 < nodes.length) {
      this.setState({ currentPosition: currentPosition + 1 }, async () => {
        await fetch(`/api/user/${username}`, {
          method: 'POST',
          body: JSON.stringify({
            currentPosition: this.state.currentPosition,
          }),
        });
      });
    }
  };

  handlePreviousStep = () => {
    const { currentPosition, username } = this.state;
    if (currentPosition > 0) {
      this.setState({ currentPosition: currentPosition - 1 }, async () => {
        await fetch(`/api/user/${username}`, {
          method: 'POST',
          body: JSON.stringify({
            currentPosition: this.state.currentPosition,
          }),
        });
      });
    }
  };

  render() {
    const { username, currentPosition, users } = this.state;

    return (
      <>
        <GlobalStyle />
        <Container>
          <h2>{username}</h2>
          <p>{nodes[currentPosition].text}</p>
          <div>
            <Button onClick={this.handlePreviousStep} type="button">
              Previous Step
            </Button>
            <Button onClick={this.handleNextStep} type="button">
              Next Step
            </Button>
          </div>
          <MapSection />
        </Container>
      </>
    );
  }
}

export default RacerPage;
