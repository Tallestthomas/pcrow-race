import React from 'react';
import styled from 'styled-components';

import Section from './shared/Section';
import RacerCard from './RacerCard';

const RacerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`;

/*
 * const racers = [
 * {
 *  username: "tallestthomas",
 *  socials: {
 *    twitch: String,
 *    youtube: String,
 *    twitter: String,
 *    instagram: String
 *  }
 * }
 * ];
 *
 *
 */

const tallestthomas = {
  username: 'TallestThomas',
  socials: {
    twitch: 'tallestthomas',
    twitter: 'tallestthomas',
    instagram: 'tallestthomas',
  },
  profileImage: 'https://placekitten.com/50/50',
};

export default () => (
  <Section title="Racers">
    <RacerContainer>
      <RacerCard username={tallestthomas.username} socials={tallestthomas.socials} profileImage={tallestthomas.profileImage} />
      <RacerCard username="PointCrow" />
      <RacerCard username="TallestThomas" />
      <RacerCard username="PointCrow" />
      <RacerCard username="TallestThomas" />
      <RacerCard username="PointCrow" />
    </RacerContainer>
  </Section>
);
