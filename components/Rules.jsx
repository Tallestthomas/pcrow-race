import React from 'react';
import styled from 'styled-components';
import Section from './shared/Section';

const RulesContainer = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
`;

const RulesColumn = styled.div`
  border: 1px solid red;
  flex: 1;
  padding: 1rem 0.5rem;
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
          <Rule>One</Rule>
          <Rule>Two</Rule>
          <Rule>Three</Rule>
        </RulesList>
      </RulesColumn>
      <RulesColumn>
        <RulesList>
          <Rule>Four</Rule>
          <Rule>Five</Rule>
          <Rule>Six</Rule>
        </RulesList>
      </RulesColumn>
    </RulesContainer>
  </Section>
);
