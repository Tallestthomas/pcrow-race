import React from "react";
import styled from "styled-components";
import Avatar from "./shared/Avatar";

const Card = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0.5rem 0;
  margin-right: 1rem;
  flex: 1 0 25%;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  &:first-child {
    margin-left: 0;
  }
`;

const RacerInfo = styled.div`
  diplay: flex;
  margin-left: 1rem;

  h3 {
    font-family: "Plumpfull Black";
    margin: 0.5rem auto;
  }

  }
`;

const RacerName = styled.a`
  text-decoration: none;
  color: #333333;
  transition: color 0.2s ease-out;

  &:hover {
    color: #26a015;
  }
`;

const SocialLink = styled.a`
margin-right: 1rem;
`

export default ({ username }) => (
  <Card>
    <Avatar height="50px" width="50px" image="https://placehold.it/50x50" />
    <RacerInfo>
      <RacerName href={`https://twitch.tv/${username}`}>
        <h3>{username}</h3>
      </RacerName>
      <SocialLink href="#">
        <img src="https://placehold.it/30x15" />
      </SocialLink>
      <SocialLink href="#">
        <img src="https://placehold.it/30x15" />
      </SocialLink>
      <SocialLink href="#">
        <img src="https://placehold.it/30x15" />
      </SocialLink>
      <SocialLink href="#">
        <img src="https://placehold.it/30x15" />
      </SocialLink>
    </RacerInfo>
  </Card>
);
