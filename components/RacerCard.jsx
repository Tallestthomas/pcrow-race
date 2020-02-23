import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faYoutube, faTwitch, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Avatar from './shared/Avatar';
import ConditionalRender from './shared/ConditionalRender';

const Card = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0.5rem 0;
  margin-right: 1rem;
  flex: 1 0 25%;
  max-width: calc(33% - 1rem);
  box-shadow: ${(props) => (!props.isListItem ? '2px 2px 4px rgba(0, 0, 0, 0.3)' : '')};

  &:first-child {
    margin-left: 0;
  }

  @media screen and (max-width: 890px) {
    max-width: calc(50% - 1rem);
  flex: 1 0 40%;
  }
  @media screen and (max-width: 600px) {
    max-width: calc(100% - 1rem);
  flex: 1 0 100%;
  }
`;

const RacerInfo = styled.div`
  diplay: flex;
  margin-left: 1rem;

  h3 {
    font-family: "Plumpfull Black";
    margin: 0.5rem auto;
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

  .svg-inline--fa {
    color: #26a015;
    transition: 0.25s color ease-in-out;
  }

  .svg-inline--fa:hover {
    color: #3ce224;
  }
`;

class RacerCard extends React.Component {
  state = {
    avatar: ''
  }

  render() {
    const {
      username, isListItem, socials = {}, profileImage,
    } = this.props;

    return (
      <Card isListItem={isListItem}>
        <a href={`https://twitch.tv/${username}`}>
          <Avatar width="50px" height="50px" image={profileImage} />
          </a>
        <RacerInfo>
          <RacerName href={`https://twitch.tv/${username}`}>
            <h3>{username}</h3>
          </RacerName>
          <ConditionalRender condition={!isListItem}>
              <SocialLink href={`https://twitch.tv/${username}`}>
                <FontAwesomeIcon icon={faTwitch} size="lg"/>
              </SocialLink>
            <ConditionalRender condition={socials.youtube}>
              <SocialLink href={`https://youtube.com/${socials.youtube}`}>
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </SocialLink>
            </ConditionalRender>
            <ConditionalRender condition={socials.discord}>
              <SocialLink href={`https://discordapp.com/invite/${socials.discord}`}>
                <FontAwesomeIcon icon={faDiscord} size="lg" />
              </SocialLink>
            </ConditionalRender>
            <ConditionalRender condition={socials.twitter}>
              <SocialLink href={`https://twitter.com/${socials.twitter}`}>
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </SocialLink>
            </ConditionalRender>
            <ConditionalRender condition={socials.instagram}>
              <SocialLink href={`https://instagram.com/${socials.instagram}`}>
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </SocialLink>
            </ConditionalRender>
          </ConditionalRender>
        </RacerInfo>
      </Card>
    );
  }
}


RacerCard.propTypes = {
  username: PropTypes.string.isRequired,
  isListItem: PropTypes.bool,
  socials: PropTypes.shape({
    twitch: PropTypes.string,
    youtube: PropTypes.string,
    twitter: PropTypes.string,
    instagram: PropTypes.string,
  }),
};

RacerCard.defaultProps = {
  isListItem: false,
  socials: {
    twitch: undefined,
    youtube: undefined,
    twitter: undefined,
    instagram: undefined,
  },
};

export default RacerCard;
