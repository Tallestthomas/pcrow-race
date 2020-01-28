import React from "react";
import styled from "styled-components";

import Section from "./shared/Section";
import RacerCard from "./RacerCardLarge";

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

export default () => (
  <Section title="Racers">
    <RacerContainer>
      <RacerCard username="TallestThomas" />
      <RacerCard username="PointCrow" />
      <RacerCard username="TallestThomas" />
      <RacerCard username="PointCrow" />
      <RacerCard username="TallestThomas" />
      <RacerCard username="PointCrow" />
    </RacerContainer>
  </Section>
);
