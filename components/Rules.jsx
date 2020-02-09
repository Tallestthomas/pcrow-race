import React from 'react';
import styled from 'styled-components';
import Section from './shared/Section';

const RulesContainer = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
`;

const RulesColumn = styled.div`
  flex: 1;
  padding: 1rem;
  padding-left: 0;
`;
const RulesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Rule = styled.li`
  margin-bottom: 1rem;
`;

export default () => (
  <Section title="Rules">
    <RulesContainer>
      <RulesColumn>
        <RulesList>
          <Rule>
            1) Participants must feed all 16 dogs scattered across Hyrule and collect the treasure they lead to.
            they lead to.
          </Rule>
          <Rule>
            2) The 16 dogs must be aquired in a specific order and in a certain way as detailed in
            the route. (You will need to complete each of these steps in order. You can deviate from
            the path, however you cannot, say, complete step 29 before you've completed 1-28)
          </Rule>
          <Rule>
            3) Racers must use a Nintendo Switch, no emulators allowed. DLC must also be disabled so
            no unfair advantage can be given to those who don't have the funds to purchase the DLC.
          </Rule>
        </RulesList>
      </RulesColumn>
      <RulesColumn>
        <RulesList>
          <Rule>
            4) Runs must start from a New Game and cannot be started with any glitch that persists
            through save files (moonjump, skew, etc.)
          </Rule>
          <Rule>
            5) Timing starts when gaining control of Link, Timing ends when the last treasure chest
            collectable is obtained (aka when you pick up the item after opening the chest)
          </Rule>
          <Rule>
            6) Fastest racer to aquire all 16 dog treasures wins $600, second place is $300, third
            gains $100. Cheers!
          </Rule>
        </RulesList>
      </RulesColumn>
    </RulesContainer>
  </Section>
);
