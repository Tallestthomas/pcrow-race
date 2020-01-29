import React from 'react';
import styled from 'styled-components';

import Section from './shared/Section';
import RacerCard from './RacerCard';
import { users } from '../data/racers.json';

const RacerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`;


export default () => (
  <Section title="Racers">
    <RacerContainer>
      { users.map((user) => (
        <RacerCard
          key={user.username}
          username={user.username}
          socials={user.socials}
          profileImage={user.profileImage}
        />
      ))}
    </RacerContainer>
  </Section>
);
