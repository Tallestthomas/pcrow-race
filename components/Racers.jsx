import React from 'react';
import styled from 'styled-components';

import Section from './shared/Section';
import RacerCard from './RacerCard';

const RacerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`;


export default ({ users = [] }) => (
  <Section title="Racers">
    <RacerContainer>
      { users.map((user) => {
        const { data } = user || {};

        return (
          <RacerCard
            key={data.username}
            username={data.username}
            socials={data.socials}
            profileImage={data.profileImage}
          />
        );
      })}
    </RacerContainer>
  </Section>
);
