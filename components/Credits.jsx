import React from 'react';
import styled from 'styled-components';

import Section from './shared/Section';
import RacerCard from './RacerCard';

const StrikeThrough = styled.span`
  display: inline-block;
  position: relative;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: calc(50% - 1px);
    left: -2px;
    height: 3px;
    width: 103%;
    background-color: green;
  }
`;

const Credits = () => (
  <Section title="Credits">
    <h3>
      Host, Breath of the Wild Challenge Runner/Speedrunner,
      <StrikeThrough>Cult Leader</StrikeThrough>
    </h3>
    <RacerCard
      username="PointCrow"
      socials={{
        youtube: 'PointCrow',
        twitter: 'PointCrow',
        discord: 'pYNzF3g',
        instagram: 'pointcrow',
      }}
      profileImage="https://res.cloudinary.com/tallestthomas/image/upload/v1581394162/crow.png"
    />
    <br />
    <h3>Design and Coding by @TallestThomas</h3>
    <RacerCard
      username="tallestthomas"
      socials={{
        youtube: 'UCLaVpOJ6OLcDrZAxV8XgozA',
        discord: 'DPZgT4g',
        twitter: 'tallestthomas',
        instagram: 'tallestthomas',
      }}
      profileImage="https://res.cloudinary.com/tallestthomas/image/upload/v1581281840/dfff3e98-8e2c-4a46-b89f-10bc1ec56d29-profile_image-300x300_wyy1v9.png"
    />
  </Section>
);

export default Credits;
