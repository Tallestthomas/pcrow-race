import React from 'react';
import styled from 'styled-components';

const HeroImage = styled.div`
  height: 100vh;
  position: relative;
  background-image: url("/hero.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 calc(50% - 480px);
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-family: "Plumpfull Black";
  font-size: 3rem;
  color: #fefefe;
  letter-spacing: 3px;
  text-shadow: 3px 3px #585858;
`;

export default ({ children }) => (
  <HeroImage>
    <HeroOverlay>
      <HeroTitle>
        PointCrow`s $1000
        <br />
        Breath of the Wild Race
      </HeroTitle>
    </HeroOverlay>
    {children}
  </HeroImage>
);
