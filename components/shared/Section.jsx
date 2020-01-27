import React from "react";
import styled from "styled-components";

const Section = styled.div`
  padding: 2rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-family: "Plumpfull Black";
  position: relative;

  &:after {
    display: block;
    content: "";
    height: 2px;
    width: 250px;
    background-color: #26a015;
    bottom: -0.5rem;
    position: absolute;
  }
`;

export default ({ title, children }) => (
  <Section>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </Section>
);
